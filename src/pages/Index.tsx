import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  // Данные о бюджетных расходах
  const budgetData = [
    { name: 'Здравоохранение', amount: 72, percentage: 20.0, color: '#2563EB' },
    { name: 'Образование', amount: 65, percentage: 18.0, color: '#1E40AF' },
    { name: 'Оборона', amount: 55, percentage: 15.3, color: '#DC2626' },
    { name: 'Наука и технологии', amount: 54, percentage: 15.0, color: '#7C3AED' },
    { name: 'Инфраструктура', amount: 40, percentage: 11.1, color: '#059669' },
    { name: 'Соц. обеспечение', amount: 29, percentage: 8.1, color: '#EA580C' },
    { name: 'Экология', amount: 18, percentage: 5.1, color: '#16A34A' },
    { name: 'Культура', amount: 11, percentage: 3.1, color: '#9333EA' },
    { name: 'Международные связи', amount: 7, percentage: 1.9, color: '#0891B2' },
    { name: 'Резервный фонд', amount: 9, percentage: 2.5, color: '#64748B' }
  ];

  // Данные об административном делении
  const provinces = [
    { id: 1, name: 'Столичный округ Асхиния', center: 'Асхиния', population: 5.6, features: 'Столица, IT, финансы, СМИ, промышленность', position: 'Запад' },
    { id: 2, name: 'Столичный округ Хвиней', center: 'Хвиней', population: 4.9, features: 'Главный порт, судостроение, рыболовство, ВПК, логистика', position: 'Север (побережье)' },
    { id: 3, name: 'Центральная провинция', center: 'Сармонт', population: 3.9, features: 'Тяжёлая промышленность, транспортный хаб (ж/д, шоссе)', position: 'Центр' },
    { id: 4, name: 'Восточная провинция', center: 'Савея', population: 3.5, features: 'Технопарки, ВПК, НИОКР, IT-кластеры', position: 'Восток' },
    { id: 5, name: 'Западная провинция', center: 'Катрианпи', population: 2.6, features: 'Промышленность (авто, робототехника), порты-спутники Хвинея', position: 'Запад' },
    { id: 6, name: 'Южная провинция', center: 'Вега', population: 1.9, features: 'Сельское хозяйство (зерно, виноград, фрукты)', position: 'Юг' },
    { id: 7, name: 'Северная провинция', center: 'Касалья', population: 1.4, features: 'Курорты, виноделие, лёгкая промышленность', position: 'Север' }
  ];

  // Экономические показатели
  const economicData = [
    { metric: 'ВВП', value: '1,2 трлн сашинов', icon: 'TrendingUp' },
    { metric: 'Рост ВВП', value: '4,8%', icon: 'ArrowUp' },
    { metric: 'Безработица', value: '3,1%', icon: 'Users' },
    { metric: 'Инфляция', value: '2,8%', icon: 'Percent' },
    { metric: 'Экспорт', value: '300 млрд сашинов', icon: 'Send' },
    { metric: 'Импорт', value: '280 млрд сашинов', icon: 'Download' }
  ];

  // Военные силы
  const militaryData = [
    { branch: 'Сухопутные войска', personnel: '70 тыс.', equipment: '~300 танков, 800 БТР, 400 орудий' },
    { branch: 'ВВС', personnel: '30 тыс.', equipment: '60 истребителей, 300 БПЛА, 18 бомбардировщиков' },
    { branch: 'ВМФ', personnel: '20 тыс.', equipment: '10 фрегатов, 7 противолодочных кораблей, 3 подлодки' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Шапка с флагом */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/files/6bcc8670-6b40-4dab-b3e9-11135c31bf20.png" 
              alt="Флаг Сашианийской Республики" 
              className="w-16 h-12 object-cover rounded shadow-sm"
            />
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Сашианийская Республика</h1>
              <p className="text-slate-600 font-medium">Официальный информационный портал</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-5 lg:grid-cols-10 gap-2 h-auto p-2 bg-white shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Обзор</TabsTrigger>
            <TabsTrigger value="geography" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">География</TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">История</TabsTrigger>
            <TabsTrigger value="government" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Власть</TabsTrigger>
            <TabsTrigger value="economy" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Экономика</TabsTrigger>
            <TabsTrigger value="military" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Армия</TabsTrigger>
            <TabsTrigger value="regions" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Регионы</TabsTrigger>
            <TabsTrigger value="social" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Социальная сфера</TabsTrigger>
            <TabsTrigger value="culture" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Культура</TabsTrigger>
            <TabsTrigger value="space" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Космос</TabsTrigger>
          </TabsList>

          {/* Обзор */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Flag" className="text-blue-600" />
                    Общие сведения
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Полное название:</strong> Сашианийская Республика</div>
                    <div><strong>Форма правления:</strong> Президентская республика</div>
                    <div><strong>Президент:</strong> Карл Маркес</div>
                    <div><strong>Премьер-министр:</strong> Лилия Вест</div>
                    <div><strong>Столица:</strong> Асхиния</div>
                    <div><strong>Язык:</strong> Сашианийский</div>
                    <div><strong>Валюта:</strong> Сашин (SHN)</div>
                    <div><strong>Площадь:</strong> ~92,400 км²</div>
                    <div><strong>Население:</strong> 23,8 млн</div>
                    <div><strong>ВВП на душу:</strong> 50,400 сашинов</div>
                    <div><strong>Независимость:</strong> 15 августа 1948 года</div>
                    <div><strong>Код ISO:</strong> SH / SAH</div>
                  </div>
                  <Separator />
                  <div>
                    <strong>Девиз и гимн:</strong> "Слава Республике, Слава Сашиании!"
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-green-600" />
                    Ключевые показатели
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {economicData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name={item.icon as any} size={16} className="text-blue-600" />
                        <span className="text-sm font-medium">{item.metric}</span>
                      </div>
                      <Badge variant="secondary">{item.value}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Бюджет */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="PieChart" className="text-blue-600" />
                  Государственный бюджет 2025 (360 млрд сашинов)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {budgetData.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.name}</span>
                          <div className="text-right">
                            <div className="text-sm font-bold">{item.amount} млрд</div>
                            <div className="text-xs text-slate-500">{item.percentage}%</div>
                          </div>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-blue-600">360</div>
                      <div className="text-sm text-slate-600">млрд сашинов</div>
                      <div className="text-xs text-slate-500">Общий бюджет</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* География и климат */}
          <TabsContent value="geography" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-green-600" />
                    Расположение и границы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div><strong>Север:</strong> Сашианийский океан</div>
                    <div><strong>Восток:</strong> Кусарийская Демократическая Республика</div>
                    <div><strong>Юг:</strong> Государство Кальвария (союзник)</div>
                    <div><strong>Запад:</strong> Королевство Вестмарк (торговый партнёр)</div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-semibold">Рельеф:</h4>
                    <div className="text-sm space-y-1">
                      <div><strong>Север:</strong> холмистые плато, леса, океан и горы</div>
                      <div><strong>Центр:</strong> равнины с развитой промышленностью</div>
                      <div><strong>Юг:</strong> долины и степи, сельское хозяйство</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CloudRain" className="text-blue-600" />
                    Климат
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <strong className="text-blue-800">Север:</strong>
                      <div className="text-sm text-blue-700">Умеренно-океанический (влажные лета, мягкие зимы)</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <strong className="text-green-800">Центр:</strong>
                      <div className="text-sm text-green-700">Умеренно-континентальный (тёплое лето, холодные зимы)</div>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <strong className="text-orange-800">Юг:</strong>
                      <div className="text-sm text-orange-700">Субтропический (тёплые зимы, жаркое лето)</div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">Водные объекты:</h4>
                    <div className="text-sm space-y-1">
                      <div>• Река Асхиния</div>
                      <div>• Озеро Велара</div>
                      <div>• Крупные водохранилища</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* История */}
          <TabsContent value="history" className="space-y-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-amber-600" />
                    Исторические эпохи
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-400 pl-4">
                      <h3 className="font-semibold text-amber-800">Ранние эпохи</h3>
                      <p className="text-sm text-slate-600">Первые поселения возникли в III тыс. до н.э. К VI веку до н.э. сложились торговые города.</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h3 className="font-semibold text-blue-800">Средневековье</h3>
                      <p className="text-sm text-slate-600">X–XIII века — период феодальных войн. В XIV веке образовалось два государства: Сашия и Ания.</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h3 className="font-semibold text-green-800">Колониальный период</h3>
                      <p className="text-sm text-slate-600">XIX век — колонизация страной Ортании.</p>
                    </div>
                    <div className="border-l-4 border-red-400 pl-4">
                      <h3 className="font-semibold text-red-800">Война за независимость (1947–1948)</h3>
                      <p className="text-sm text-slate-600">Сашия и Ания выиграли у Ортании контроль над ключевыми территориями и по договору объединились в единую Республику.</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h3 className="font-semibold text-purple-800">Независимость (1948)</h3>
                      <p className="text-sm text-slate-600">15 августа 1948 года — провозглашение независимости и объединение Сашии и Ании в одно единое государство.</p>
                    </div>
                    <div className="border-l-4 border-cyan-400 pl-4">
                      <h3 className="font-semibold text-cyan-800">Экономический бум (1960–1980)</h3>
                      <p className="text-sm text-slate-600">Инвестиции в IT, энергетику и сельское хозяйство сделали страну региональным лидером.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Государственное устройство */}
          <TabsContent value="government" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Crown" className="text-blue-600" />
                    Президент
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div><strong>Карл Маркес</strong></div>
                    <div className="text-sm text-slate-600">Избран в 2020 году</div>
                    <div className="text-sm">Срок: 5 лет</div>
                    <div className="text-sm">Полномочия: возглавляет армию и управляет внешней политикой</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Building" className="text-green-600" />
                    Парламент
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <strong>Сенат</strong>
                      <div className="text-sm text-slate-600">Верхняя палата — представители регионов</div>
                    </div>
                    <div>
                      <strong>Палата народных депутатов</strong>
                      <div className="text-sm text-slate-600">Низшая палата — выборы каждые 4 года</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" className="text-purple-600" />
                    Правительство
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div><strong>Лилия Вест</strong></div>
                    <div className="text-sm text-slate-600">Премьер-министр</div>
                    <div className="text-sm">Формирует кабинет министров</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Экономика */}
          <TabsContent value="economy" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="LineChart" className="text-green-600" />
                    Макроэкономика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>ВВП:</strong> 1,2 трлн сашинов</div>
                    <div><strong>Рост ВВП:</strong> 4,8%</div>
                    <div><strong>Безработица:</strong> 3,1%</div>
                    <div><strong>Инфляция:</strong> 2,8%</div>
                    <div><strong>Экспорт:</strong> 300 млрд сашинов</div>
                    <div><strong>Импорт:</strong> 280 млрд сашинов</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Factory" className="text-blue-600" />
                    Основные отрасли
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <strong className="text-blue-800">IT и электроника</strong>
                      <div className="text-sm text-blue-700">ПО, чипы, телекоммуникации</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <strong className="text-green-800">Сельское хозяйство</strong>
                      <div className="text-sm text-green-700">Зерно, фрукты, виноград</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <strong className="text-purple-800">Машиностроение</strong>
                      <div className="text-sm text-purple-700">Робототехника, автомобили</div>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <strong className="text-yellow-800">Энергетика</strong>
                      <div className="text-sm text-yellow-700">Водоэнергетика, солнечные станции</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Globe" className="text-cyan-600" />
                  Международная торговля
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Экспорт</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Электроника</div>
                      <div>• Программное обеспечение</div>
                      <div>• Продовольствие</div>
                      <div>• Автомобили</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Импорт</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Сырьё для промышленности</div>
                      <div>• Интеллектуальные услуги</div>
                      <div>• Ресурсы (инженеры, IT-специалисты)</div>
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div>
                  <h4 className="font-semibold mb-2">Торговые партнёры:</h4>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Ортания</Badge>
                    <Badge variant="outline">Кальвария</Badge>
                    <Badge variant="outline">Вестмарк</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Вооружённые силы */}
          <TabsContent value="military" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="DollarSign" className="text-green-600" />
                    Военный бюджет
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">55</div>
                      <div className="text-sm text-slate-600">млрд сашинов</div>
                      <div className="text-xs text-slate-500">15,3% от бюджета</div>
                    </div>
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div><strong>Численность:</strong> 120 тыс. человек</div>
                      <div><strong>Резерв:</strong> 250 тыс. человек</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Shield" className="text-red-600" />
                    Состав вооружённых сил
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {militaryData.map((branch, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{branch.branch}</h4>
                          <Badge variant="secondary">{branch.personnel}</Badge>
                        </div>
                        <div className="text-sm text-slate-600">{branch.equipment}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-amber-600">Важная информация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">
                  Высокие расходы на оборону оправданы тем, что Кусария — хоть и бедная страна по сравнению с Сашианией, 
                  но с очень развитым ВПК, что представляет угрозу для Республики.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Административное деление */}
          <TabsContent value="regions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Map" className="text-blue-600" />
                  Административное деление
                </CardTitle>
                <CardDescription>
                  5 провинций и 2 столичных округа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {provinces.map((province) => (
                    <div 
                      key={province.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        selectedProvince === province.name ? 'border-blue-500 bg-blue-50' : 'border-slate-200'
                      }`}
                      onClick={() => setSelectedProvince(selectedProvince === province.name ? null : province.name)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{province.name}</h3>
                          <div className="text-sm text-slate-600 mt-1">
                            <strong>Центр:</strong> {province.center} | <strong>Население:</strong> {province.population} млн
                          </div>
                          <div className="text-sm text-slate-500 mt-1">
                            <strong>Расположение:</strong> {province.position}
                          </div>
                        </div>
                        <Badge variant="outline">{province.population} млн</Badge>
                      </div>
                      {selectedProvince === province.name && (
                        <div className="mt-3 pt-3 border-t">
                          <p className="text-sm text-slate-700">
                            <strong>Особенности:</strong> {province.features}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Социальная сфера */}
          <TabsContent value="social" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Heart" className="text-red-600" />
                    Здравоохранение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">72</div>
                      <div className="text-sm text-slate-600">млрд сашинов</div>
                      <div className="text-xs text-slate-500">20% от бюджета</div>
                    </div>
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div>• Смешанная система: частные клиники и государственные поликлиники</div>
                      <div>• Высокий уровень медицинских технологий</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="GraduationCap" className="text-blue-600" />
                    Образование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">65</div>
                      <div className="text-sm text-slate-600">млрд сашинов</div>
                      <div className="text-xs text-slate-500">18% от бюджета</div>
                    </div>
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div>• Сеть школ и университетов</div>
                      <div>• Асхинийский технический университет</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Road" className="text-green-600" />
                  Инфраструктура
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">40</div>
                    <div className="text-sm text-slate-600">млрд сашинов</div>
                    <div className="text-xs text-slate-500">11,1% от бюджета</div>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div>• Шоссе и скоростные железные дороги</div>
                    <div>• Международный аэропорт «Асхиния»</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="AlertTriangle" className="text-amber-600" />
                  Социальные проблемы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>• Недостаток квалифицированных кадров в IT</div>
                  <div>• Экологические последствия промышленности</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Культура */}
          <TabsContent value="culture" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Palette" className="text-purple-600" />
                    Культура и искусство
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">11</div>
                      <div className="text-sm text-slate-600">млрд сашинов</div>
                      <div className="text-xs text-slate-500">3,1% от бюджета</div>
                    </div>
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div>• Театры и музеи</div>
                      <div>• Развитая киноиндустрия</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" className="text-orange-600" />
                    Праздники
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <strong className="text-red-800">День Независимости</strong>
                      <div className="text-sm text-red-700">15 августа</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <strong className="text-green-800">Праздник Колоса</strong>
                      <div className="text-sm text-green-700">Сашианийское рождество</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Globe" className="text-cyan-600" />
                  Международные отношения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Союзники</h4>
                    <div className="flex gap-2 flex-wrap">
                      <Badge className="bg-green-100 text-green-800">Кальвария</Badge>
                      <Badge className="bg-green-100 text-green-800">Вестмарк</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Противники</h4>
                    <div className="space-y-2">
                      <Badge className="bg-red-100 text-red-800">Кусария</Badge>
                      <div className="text-sm text-slate-600">Споры за газовые месторождения</div>
                      <Badge className="bg-red-100 text-red-800">Ортания</Badge>
                      <div className="text-sm text-slate-600">Региональная сверхдержава, колониальные споры</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Организации</h4>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Совет наций</Badge>
                      <Badge variant="outline">Экологическая Сеть</Badge>
                      <Badge variant="outline">Торговый Союз</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Космическая программа */}
          <TabsContent value="space" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Rocket" className="text-purple-600" />
                    Космическая программа
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">21.6</div>
                      <div className="text-sm text-slate-600">млрд сашинов</div>
                      <div className="text-xs text-slate-500">40% от бюджета науки</div>
                    </div>
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div><strong>Спутники:</strong> 20 единиц</div>
                      <div><strong>Космодром:</strong> «Астория-1»</div>
                      <div><strong>Назначение:</strong> наблюдение, связь</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Atom" className="text-cyan-600" />
                    Наука и технологии
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-600">54</div>
                      <div className="text-sm text-slate-600">млрд сашинов</div>
                      <div className="text-xs text-slate-500">15% от бюджета</div>
                    </div>
                    <Separator />
                    <div className="space-y-2 text-sm">
                      <div>• Исследования и разработки</div>
                      <div>• Технопарки и IT-кластеры</div>
                      <div>• Космическая программа (40%)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;