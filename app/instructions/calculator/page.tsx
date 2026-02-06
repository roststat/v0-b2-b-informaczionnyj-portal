"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";

interface CalcResult {
  dosage: number;
  dailyVolume: number;
  recommendation: string;
}

function calculateDosage(
  area: number,
  concentration: number,
  method: string,
): CalcResult | null {
  if (area <= 0 || concentration <= 0) return null;

  const ratePerM2 = method === "spray" ? 300 : 150; // мл/м²
  const totalVolume = (area * ratePerM2) / 1000; // литров раствора
  const maxflokVolume = totalVolume * (concentration / 100); // литров МАКСФЛОКА

  let recommendation = "";
  if (concentration <= 2) {
    recommendation =
      "Стандартный режим для бактериальных инфекций (грам+, грам-). Время выдержки: 60-360 мин.";
  } else if (concentration <= 4) {
    recommendation =
      "Усиленный режим для вирусных инфекций и грибков. Время выдержки: 90-180 мин.";
  } else if (concentration <= 6) {
    recommendation =
      "Режим для туберкулёза и особо устойчивых инфекций. Время выдержки: 120-360 мин.";
  } else {
    recommendation =
      "Максимальный режим для грибков и плесени. Время выдержки: 60-120 мин.";
  }

  return {
    dosage: maxflokVolume,
    dailyVolume: totalVolume,
    recommendation,
  };
}

export default function CalculatorPage() {
  const [area, setArea] = useState("");
  const [concentration, setConcentration] = useState("");
  const [method, setMethod] = useState("spray");
  const [result, setResult] = useState<CalcResult | null>(null);

  const handleCalculate = () => {
    const calc = calculateDosage(
      Number.parseFloat(area),
      Number.parseFloat(concentration),
      method,
    );
    setResult(calc);
  };

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 pb-16">
        <BreadcrumbNav
          items={[
            { label: "Инструкции", href: "/instructions" },
            { label: "Калькулятор дозировки" },
          ]}
        />

        <div className="mb-8">
          <h1 className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl">
            Калькулятор дозировки МАКСФЛОКА
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Рассчитайте необходимое количество МАКСФЛОКА для обработки вашего
            объекта. Введите параметры и получите рекомендации.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Входные параметры
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <div>
                <Label htmlFor="area">
                  {"Площадь обработки (м²)"}
                </Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="Например: 50"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  min="0"
                  step="0.1"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="concentration">
                  {"Концентрация раствора (%)"}
                </Label>
                <Input
                  id="concentration"
                  type="number"
                  placeholder="Например: 3"
                  value={concentration}
                  onChange={(e) => setConcentration(e.target.value)}
                  min="0"
                  max="12"
                  step="0.5"
                  className="mt-1.5"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  Бактерии: 2-3% | Вирусы: 4-5% | ТБ: 5-6% | Грибки: 6-12%
                </p>
              </div>

              <div>
                <Label>Способ обработки</Label>
                <div className="mt-1.5 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setMethod("spray")}
                    className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                      method === "spray"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    Орошение
                    <span className="block text-xs font-normal opacity-70">
                      300 мл/м²
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethod("wipe")}
                    className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                      method === "wipe"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    Протирание
                    <span className="block text-xs font-normal opacity-70">
                      150 мл/м²
                    </span>
                  </button>
                </div>
              </div>

              <Button
                onClick={handleCalculate}
                className="w-full"
                size="lg"
                disabled={!area || !concentration}
              >
                Рассчитать
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div>
            {result ? (
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle>Результат расчёта</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-card p-4">
                      <p className="text-sm text-muted-foreground">
                        Объём рабочего раствора
                      </p>
                      <p className="mt-1 text-2xl font-bold text-foreground">
                        {result.dailyVolume.toFixed(1)}{" "}
                        <span className="text-base font-normal text-muted-foreground">
                          л
                        </span>
                      </p>
                    </div>
                    <div className="rounded-lg bg-card p-4">
                      <p className="text-sm text-muted-foreground">
                        Объём МАКСФЛОКА
                      </p>
                      <p className="mt-1 text-2xl font-bold text-primary">
                        {result.dosage.toFixed(2)}{" "}
                        <span className="text-base font-normal text-muted-foreground">
                          л
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-card p-4">
                    <p className="mb-1 text-sm font-medium text-foreground">
                      Рекомендация
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {result.recommendation}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border border-primary/20 bg-card p-4">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Данный расчёт является рекомендательным. Точная дозировка
                      может варьироваться в зависимости от конкретных условий.
                      Для уточнения обратитесь к нашим специалистам.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="flex h-full items-center justify-center bg-muted/30">
                <CardContent className="py-16 text-center">
                  <Calculator className="mx-auto mb-4 h-12 w-12 text-muted-foreground/30" />
                  <p className="text-muted-foreground">
                    Введите параметры и нажмите «Рассчитать»
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Reference table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Справочная таблица режимов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="rounded-tl-lg px-4 py-2.5 text-left font-semibold">
                      Тип инфекции
                    </th>
                    <th className="px-4 py-2.5 text-left font-semibold">
                      Концентрация
                    </th>
                    <th className="px-4 py-2.5 text-left font-semibold">
                      Время выдержки
                    </th>
                    <th className="rounded-tr-lg px-4 py-2.5 text-left font-semibold">
                      Применение
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Бактерии (грам+, грам-)",
                      "2-3%",
                      "60-360 мин",
                      "ЖКХ, пищевая, ЛПУ",
                    ],
                    [
                      "Вирусы (грипп, герпес, H5N1)",
                      "4-5%",
                      "90-180 мин",
                      "Птицеводство, ЛПУ",
                    ],
                    [
                      "Туберкулёз",
                      "5-6%",
                      "120-360 мин",
                      "ЛПУ, спец. объекты",
                    ],
                    [
                      "Грибки и плесень",
                      "6-12%",
                      "60-120 мин",
                      "ЖКХ, пищевая, подвалы",
                    ],
                    [
                      "Устранение запахов",
                      "2-4%",
                      "30-60 мин",
                      "Все отрасли",
                    ],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-border/50">
                      {row.map((cell, i) => (
                        <td
                          key={`${cell}-${i}`}
                          className={`px-4 py-2.5 ${i === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 border-t pt-6">
          <Button variant="ghost" asChild>
            <Link href="/instructions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Все инструкции
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
