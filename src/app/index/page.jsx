"use client";

// pages/index.js
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Stack,
  Button,
  Chip,
  LinearProgress,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/*
  Здесь полностью указаны данные (можно редактировать прямо в этом файле)
  Чтобы не добавлять отдельный data/sins.js — всё в одном месте.
*/
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

  { id: 10, title: "Маловерием." },
  { id: 11, title: "Неверием." },
  { id: 12, title: "Сомнением." },
  {
    id: 13,
    title: "Колебанием в вере, от врага всеваемым против Бога и святой Церкви.",
  },
  { id: 14, title: "Самомнением и вольным мнением." },
  { id: 15, title: "Суеверием." },
  { id: 16, title: "Гаданием." },
  { id: 17, title: "Самонадеянностью." },
  { id: 18, title: "Нерадением." },

  { id: 19, title: "Маловерием." },
  { id: 20, title: "Неверием." },
  { id: 21, title: "Сомнением." },
  {
    id: 22,
    title: "Колебанием в вере, от врага всеваемым против Бога и святой Церкви.",
  },
  { id: 23, title: "Самомнением и вольным мнением." },
  { id: 24, title: "Суеверием." },
  { id: 25, title: "Гаданием." },
  { id: 26, title: "Самонадеянностью." },
  { id: 27, title: "Нерадением." },
];

const STORAGE_KEY = "sinsAnswersV2";

export default function Home() {
  const router = useRouter();
  const [answers, setAnswers] = useState({}); // { [id]: { choice: 'yes'|'no'|'unsure', comment: '' } }

  // Загрузка из sessionStorage (клиент) и миграция старого формата если нужно
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const rawV2 = sessionStorage.getItem(STORAGE_KEY);
      if (rawV2) {
        setAnswers(JSON.parse(rawV2));
        return;
      }
      const rawV1 = sessionStorage.getItem("sinsAnswers");
      if (rawV1) {
        const parsed = JSON.parse(rawV1);
        const migrated = {};
        for (const s of sins) {
          const v = parsed[s.id];
          if (v) migrated[s.id] = { choice: v, comment: "" };
        }
        setAnswers(migrated);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Автосохранение в sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {}
  }, [answers]);

  const setChoice = (id, choice) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: { choice, comment: prev[id]?.comment || "" },
    }));
  };
  const setComment = (id, comment) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: { choice: prev[id]?.choice || undefined, comment },
    }));
  };

  const answeredCount = useMemo(
    () => sins.filter((s) => answers[s.id]?.choice).length,
    [answers],
  );
  const allAnswered = answeredCount === sins.length;

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Опрос по списку грехов
          </Typography>
          <Chip
            color={allAnswered ? "success" : "default"}
            icon={<CheckCircleIcon />}
            label={`${answeredCount} / ${sins.length}`}
            variant={allAnswered ? "filled" : "outlined"}
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 3 }}>
        {!allAnswered && answeredCount > 0 && (
          <Box sx={{ mb: 2 }}>
            <LinearProgress
              variant="determinate"
              value={(answeredCount / sins.length) * 100}
            />
          </Box>
        )}

        <Typography variant="body1" sx={{ mb: 2 }}>
          Для каждого пункта выберите: «согрешил», «не согрешил» или «не
          уверен(а)». Можно добавить комментарий.
        </Typography>

        <Stack spacing={2}>
          {sins.map((s, idx) => {
            const value = answers[s.id]?.choice || "";
            const comment = answers[s.id]?.comment || "";
            return (
              <Card key={s.id} variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {idx + 1}. {s.title}
                  </Typography>

                  <RadioGroup
                    row
                    value={value}
                    onChange={(e) => setChoice(s.id, e.target.value)}
                    sx={{ mt: 1 }}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio color="error" />}
                      label="согрешил"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio color="success" />}
                      label="не согрешил"
                    />
                    <FormControlLabel
                      value="unsure"
                      control={<Radio color="warning" />}
                      label="не уверен(а)"
                    />
                  </RadioGroup>

                  <TextField
                    label="Комментарий (необязательно)"
                    placeholder="Добавьте уточнение..."
                    fullWidth
                    multiline
                    minRows={1}
                    maxRows={4}
                    value={comment}
                    onChange={(e) => setComment(s.id, e.target.value)}
                    sx={{ mt: 1 }}
                  />
                </CardContent>
              </Card>
            );
          })}
        </Stack>

        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/results")}
            disabled={!allAnswered}
          >
            Показать результаты
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              if (confirm("Сбросить все ответы?")) {
                setAnswers({});
                try {
                  sessionStorage.removeItem(STORAGE_KEY);
                } catch {}
              }
            }}
          >
            Сбросить ответы
          </Button>
        </Stack>

        {!allAnswered && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mt: 1 }}
          >
            Ответьте на все вопросы, чтобы перейти к результатам.
          </Typography>
        )}
      </Container>
    </>
  );
}
