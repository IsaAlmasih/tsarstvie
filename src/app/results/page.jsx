"use client";

// pages/results.js
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
  Box,
  Divider,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PrintIcon from "@mui/icons-material/Print";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

/* Те же данные и пояснения, что и на странице опроса */
const sinExplanations = {
  "Маловерием.":
    "Недостаток живой, деятельной веры — когда сердце не доверяет Богу, недостаточно полагается на Него в жизни и решениях.",
  "Неверием.":
    "Прямое отрицание веры или отказ признавать Божью истину и Его промысел.",
  "Сомнением.":
    "Постоянные колебания и поиск поводов усомниться в Божьих обетованиях и в церковном учении.",
  "Колебанием в вере, от врага всеваемым против Бога и святой Церкви.":
    "Внутреннее колебание и подрыв веры, вызванные искушениями, сомнениями или внешним вредоносным влиянием.",
  "Самомнением и вольным мнением.":
    "Опирание на собственные суждения превыше церковного учения и смирения перед Богом.",
  "Суеверием.":
    "Вера в приметы, предрассудки и магические практики вместо упования на Бога.",
  "Гаданием.":
    "Обращение к ворожбе, гаданиям, гороскопам и оккультным практикам вместо доверия Богу.",
  "Самонадеянностью.":
    "Гордое, уверенное в себе и независимое от Бога отношение; пренебрежение смирением.",
  "Нерадением.":
    "Лень в духовной жизни, отсутствие усердия в молитве, покаянии и добрых делах.",
};

const sins = [
  { id: 1, title: "Маловерием." },
  { id: 2, title: "Неверием." },
  { id: 3, title: "Сомнением." },
  {
    id: 4,
    title: "Колебанием в вере, от врага всеваемым против Бога и святой Церкви.",
  },
  { id: 5, title: "Самомнением и вольным мнением." },
  { id: 6, title: "Суеверием." },
  { id: 7, title: "Гаданием." },
  { id: 8, title: "Самонадеянностью." },
  { id: 9, title: "Нерадением." },
  { id: 10, title: "Забвением о правосудии Божьем и неимением достаточной преданности воле Божьей.." },
  { id: 11, title: "Непокорностью к действиям промысла Божия.." },
  { id: 12, title: "Упорным желанием чтобы всё было по-своему.." },
  {
    id: 13,
    title: "Человекоугодием и пристрастною любовью к твари и вещам.",
  },
  { id: 14, title: "Не старанием раскрыть в себе полного познания Бога, воли Его, веры в Него, благоговения к Нему, страха перед Ним, надежды на Него, и ревности о Славе Его." },
  { id: 15, title: "Неблагодарностью к Господу Богу за все Его великие и непрестанные благодеяния, в изобилии изливаемые на каждого из нас и в целом на весь человеческий род и непамятованием о них.." },
  { id: 16, title: "Ропотом на Бога.." },
  { id: 17, title: "-." },
  { id: 18, title: "-." },

  { id: 19, title: "---." },
  { id: 20, title: "-." },
  { id: 21, title: "-" },
  {
    id: 22,
    title: "-.",
  },
  { id: 23, title: "- и - -." },
  { id: 24, title: "-." },
  { id: 25, title: "-." },
  { id: 26, title: "-." },
  { id: 27, title: "-." },
];

const STORAGE_KEY = "sinsAnswersV2";

function readable(choice) {
  if (choice === "yes") return "согрешил";
  if (choice === "no") return "не согрешил";
  if (choice === "unsure") return "не уверен(а)";
  return "не отвечено";
}

export default function Results() {
  const router = useRouter();
  const [answers, setAnswers] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw =
        sessionStorage.getItem(STORAGE_KEY) ||
        sessionStorage.getItem("sinsAnswers");
      if (!raw) {
        setAnswers({});
        return;
      }
      const parsed = JSON.parse(raw);
      const normalized = {};
      for (const s of sins) {
        const v = parsed[s.id];
        if (!v) continue;
        if (typeof v === "string")
          normalized[s.id] = { choice: v, comment: "" };
        else normalized[s.id] = { choice: v.choice, comment: v.comment || "" };
      }
      setAnswers(normalized);
    } catch {
      setAnswers({});
    }
  }, []);

  const stats = useMemo(() => {
    if (!answers) return { total: 0, yes: 0, no: 0, unsure: 0 };
    const total = sins.length;
    let yes = 0,
      no = 0,
      unsure = 0;
    for (const s of sins) {
      const c = answers[s.id]?.choice;
      if (c === "yes") yes++;
      else if (c === "no") no++;
      else if (c === "unsure") unsure++;
    }
    return { total, yes, no, unsure };
  }, [answers]);

  if (answers === null) {
    return (
      <Container sx={{ py: 3 }}>
        <Typography>Загрузка результатов...</Typography>
      </Container>
    );
  }

  const handleCSV = () => {
    const header = ["#", "Пункт", "Ответ", "Комментарий", "Пояснение"];
    const rows = sins.map((s, idx) => {
      const ans = answers[s.id] || {};
      const explanation = sinExplanations[s.title] || "";
      return [
        String(idx + 1),
        s.title,
        readable(ans.choice),
        ans.comment || "",
        explanation,
      ];
    });

    const escape = (v) => {
      const s = (v ?? "").toString();
      const needs = /[",;\n\r]/.test(s);
      const withQuotes = '"' + s.replace(/"/g, '""') + '"';
      return needs ? withQuotes : s;
    };
    const csv = [header, ...rows]
      .map((r) => r.map(escape).join(";"))
      .join("\r\n");
    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "results.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePDF = async () => {
    const node = contentRef.current;
    if (!node) return;

    // html2canvas снимает скриншот блока; затем вставляем в jsPDF с разбиением по страницам
    const canvas = await html2canvas(node, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (imgHeight <= pageHeight) {
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    } else {
      // Разбиение: нарезаем изображение по высоте
      let position = 0;
      const sliceHeightPx = Math.floor(
        (pageHeight / imgHeight) * canvas.height,
      );
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      pageCanvas.height = sliceHeightPx;
      const ctx = pageCanvas.getContext("2d");

      let first = true;
      while (position < canvas.height) {
        ctx.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
        ctx.drawImage(
          canvas,
          0,
          position,
          canvas.width,
          sliceHeightPx,
          0,
          0,
          pageCanvas.width,
          pageCanvas.height,
        );
        const pageData = pageCanvas.toDataURL("image/png");
        if (!first) pdf.addPage();
        pdf.addImage(pageData, "PNG", 0, 0, pageWidth, pageHeight);
        first = false;
        position += sliceHeightPx;
      }
    }

    pdf.save("results.pdf");
  };

  const handlePrint = () => window.print();

  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
        elevation={1}
        className="no-print"
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Результаты
          </Typography>
          <Chip
            color="default"
            icon={<CheckCircleIcon />}
            label={`Всего: ${stats.total} • согрешил: ${stats.yes} • не согрешил: ${stats.no} • не уверен(а): ${stats.unsure}`}
            variant="outlined"
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 2 }}>
        <Stack direction="row" spacing={1} className="no-print" sx={{ mb: 2 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            onClick={() => router.push("/")}
          >
            К опросу
          </Button>
          <Button
            startIcon={<DownloadIcon />}
            variant="contained"
            color="primary"
            onClick={handleCSV}
          >
            Экспорт CSV
          </Button>
          <Button
            startIcon={<PictureAsPdfIcon />}
            variant="outlined"
            color="secondary"
            onClick={handlePDF}
          >
            PDF
          </Button>
          <Button
            startIcon={<PrintIcon />}
            variant="outlined"
            onClick={handlePrint}
          >
            Печать
          </Button>
        </Stack>

        <Box ref={contentRef}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Сводка
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
            <Chip
              label={`согрешил: ${stats.yes}`}
              color="error"
              variant="outlined"
            />
            <Chip
              label={`не согрешил: ${stats.no}`}
              color="success"
              variant="outlined"
            />
            <Chip
              label={`не уверен(а): ${stats.unsure}`}
              color="warning"
              variant="outlined"
            />
            <Chip label={`всего: ${stats.total}`} />
          </Stack>

          <Divider sx={{ mb: 2 }} />

          <Stack spacing={2}>
            {sins.map((s, idx) => {
              const ans = answers[s.id] || {};
              const choice = ans.choice;
              const comment = ans.comment;
              const explanation =
                sinExplanations[s.title] || "Пояснение отсутствует.";

              const bg =
                choice === "yes"
                  ? "#fff5f5"
                  : choice === "no"
                    ? "#f5fff8"
                    : choice === "unsure"
                      ? "#fffaf0"
                      : "#f7f7f7";
              const border =
                choice === "yes"
                  ? "#ffcdd2"
                  : choice === "no"
                    ? "#c8e6c9"
                    : choice === "unsure"
                      ? "#ffe0b2"
                      : "#e0e0e0";

              return (
                <Card
                  key={s.id}
                  variant="outlined"
                  sx={{ bgcolor: bg, borderColor: border }}
                >
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight={700}>
                      {idx + 1}. {s.title}
                    </Typography>
                    <Typography sx={{ mt: 0.5 }}>
                      Ваш ответ: <strong>{readable(choice)}</strong>
                    </Typography>
                    {comment ? (
                      <Typography sx={{ mt: 0.5 }}>
                        Комментарий: {comment}
                      </Typography>
                    ) : null}
                    <Typography sx={{ mt: 1 }}>
                      Пояснение: {explanation}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>
        </Box>
      </Container>

      {/* Стили для печати: скрываем кнопки/аппбар */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </>
  );
}
