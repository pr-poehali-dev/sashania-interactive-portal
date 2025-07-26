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
  const [selectedMilitaryBranch, setSelectedMilitaryBranch] = useState<string | null>(null);

  // Данные о бюджетных расходах (обновлено согласно документу)
  const budgetData = [
    { name: 'Здравоохранение', amount: 72, percentage: 20.0, color: '#DC2626' },
    { name: 'Образование', amount: 65, percentage: 18.0, color: '#2563EB' },
    { name: 'Наука и технологии', amount: 54, percentage: 15.0, color: '#7C3AED' },
    { name: 'Оборона', amount: 55, percentage: 15.3, color: '#991B1B' },
    { name: 'Инфраструктура', amount: 40, percentage: 11.1, color: '#059669' },
    { name: 'Соц. обеспечение', amount: 29, percentage: 8.1, color: '#EA580C' },
    { name: 'Экология', amount: 18, percentage: 5.1, color: '#16A34A' },
    { name: 'Культура', amount: 11, percentage: 3.1, color: '#9333EA' },
    { name: 'Резервный фонд', amount: 9, percentage: 2.5, color: '#64748B' },
    { name: 'Международные связи', amount: 7, percentage: 1.9, color: '#0891B2' }
  ];

  // Данные об административном делении (обновлено)
  const provinces = [
    { id: 1, name: 'Столичный округ Асхиния', center: 'Асхиния', population: 5.6, features: 'Столица, IT, финансы, СМИ, промышленность', position: 'Запад', type: 'Столичный округ' },
    { id: 2, name: 'Столичный округ Хвиней', center: 'Хвиней', population: 4.9, features: 'Главный порт, судостроение, рыболовство, ВПК, логистика', position: 'Север (побережье)', type: 'Столичный округ' },
    { id: 3, name: 'Центральная провинция', center: 'Сармонт', population: 3.9, features: 'Тяжёлая промышленность, транспортный хаб (ж/д, шоссе)', position: 'Центр', type: 'Провинция' },
    { id: 4, name: 'Восточная провинция', center: 'Савея', population: 3.5, features: 'Технопарки, ВПК, НИОКР, IT-кластеры', position: 'Восток', type: 'Провинция' },
    { id: 5, name: 'Западная провинция', center: 'Катрианпи', population: 2.6, features: 'Промышленность (авто, робототехника), порты-спутники Хвинея', position: 'Запад', type: 'Провинция' },
    { id: 6, name: 'Южная провинция', center: 'Вега', population: 1.9, features: 'Сельское хозяйство (зерно, виноград, фрукты)', position: 'Юг', type: 'Провинция' },
    { id: 7, name: 'Северная провинция', center: 'Касалья', population: 1.4, features: 'Курорты, виноделие, лёгкая промышленность', position: 'Север', type: 'Провинция' }
  ];

  // Экономические показатели (обновлено)
  const economicData = [
    { metric: 'ВВП', value: '1,2 трлн сашинов', icon: 'TrendingUp' },
    { metric: 'ВВП на душу', value: '50,400 сашинов', icon: 'User' },
    { metric: 'Рост ВВП', value: '4,8%', icon: 'ArrowUp' },
    { metric: 'Безработица', value: '3,1%', icon: 'Users' },
    { metric: 'Инфляция', value: '2,8%', icon: 'Percent' },
    { metric: 'Экспорт', value: '300 млрд сашинов', icon: 'Send' },
    { metric: 'Импорт', value: '280 млрд сашинов', icon: 'Download' },
    { metric: 'Доля экспорта в ВВП', value: '~25%', icon: 'Globe' }
  ];

  // Военные силы (детальная информация)
  const militaryBranches = [
    { 
      id: 'army',
      name: 'Сухопутные войска', 
      personnel: '70 тыс.', 
      equipment: [
        'Бронетехника: ~300 танков, 800 БТР',
        'Артиллерия: 400 орудий, 150 РСЗО'
      ]
    },
    { 
      id: 'airforce',
      name: 'Военно-воздушные силы', 
      personnel: '30 тыс.', 
      equipment: [
        'Истребители: 60 современных истребителей',
        'БПЛА: 300 единиц (разведка и ударные комплексы)',
        'Бомбардировщики: 18 единиц',
        'Транспортные самолёты: 12 единиц (десантирование, эвакуация, доставка грузов)'
      ]
    },
    { 
      id: 'navy',
      name: 'Военно-морской флот', 
      personnel: '20 тыс.', 
      equipment: [
        'Фрегаты: 10 единиц',
        'Противолодочные корабли: 7 единиц',
        'Подводные лодки: 3 единицы',
        'Ракетные катера: 16 единиц'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      {/* Шапка с флагом и гербом */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-6">
            <img 
              src="https://cdn.poehali.dev/files/6bcc8670-6b40-4dab-b3e9-11135c31bf20.png" 
              alt="Флаг Сашианийской Республики" 
              className="w-20 h-14 object-cover rounded shadow-md border"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-900">Сашианийская Республика</h1>
              <p className="text-slate-600 font-medium text-lg">Официальный информационный портал</p>
              <p className="text-sm text-slate-500 italic mt-1">"Слава Республике, Слава Сашиании!"</p>
            </div>
            <div className="text-right text-sm text-slate-600">
              <div><strong>Домен:</strong> .sh</div>
              <div><strong>Код ISO:</strong> SH / SAH</div>
              <div><strong>Телефон:</strong> +47</div>
              <div><strong>Время:</strong> UTC+3</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-5 lg:grid-cols-12 gap-1 h-auto p-2 bg-white shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">Обзор</TabsTrigger>
            <TabsTrigger value="geography" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">География</TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">История</TabsTrigger>
            <TabsTrigger value="government" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">Власть</TabsTrigger>
            <TabsTrigger value="economy" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">Экономика</TabsTrigger>
            <TabsTrigger value="budget" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">Бюджет</TabsTrigger>
            <TabsTrigger value="military" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">Армия</TabsTrigger>
            <TabsTrigger value="regions" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">Регионы</TabsTrigger>
            <TabsTrigger value="social" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">Социальная сфера</TabsTrigger>
            <TabsTrigger value="culture" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">Культура</TabsTrigger>
            <TabsTrigger value="international" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">Международные связи</TabsTrigger>
            <TabsTrigger value="space" className="data-[state=active]:bg-red-700 data-[state=active]:text-white text-xs">Космос</TabsTrigger>
          </TabsList>

          {/* Обзор */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Flag" className="text-red-700" />
                    Общие сведения
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>Полное название:</strong> Сашианийская Республика</div>
                    <div><strong>Форма правления:</strong> Президентская республика</div>
                    <div><strong>Государственный строй:</strong> Федерация</div>
                    <div><strong>Президент:</strong> Карл Маркес (с 2020)</div>
                    <div><strong>Премьер-министр:</strong> Лилия Вест</div>
                    <div><strong>Столица:</strong> Асхиния</div>
                    <div><strong>Язык:</strong> Сашианийский</div>
                    <div><strong>Валюта:</strong> Сашин (SHN)</div>
                    <div><strong>Часовой пояс:</strong> AST (UTC+3)</div>
                    <div><strong>Площадь:</strong> ~92,400 км²</div>
                    <div><strong>Население:</strong> 23,8 млн (2025)</div>
                    <div><strong>ВВП на душу:</strong> 50,400 сашинов (~44,800 USD)</div>
                    <div><strong>Независимость:</strong> 15 августа 1948 года</div>
                    <div><strong>Жители:</strong> сашианиец, сашианийка, сашианийцы</div>
                    <div><strong>Интернет-домен:</strong> .sh</div>
                    <div><strong>Код ISO:</strong> SH / SAH</div>
                    <div><strong>Код МОК:</strong> SAH</div>
                    <div><strong>Телефонный код:</strong> +47</div>
                    <div><strong>Движение:</strong> правостороннее</div>
                    <div><strong>Доля экспорта в ВВП:</strong> ~25%</div>
                    <div><strong>Гимн:</strong> "Слава Республике, Слава Сашиании!"</div>
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
                <CardContent className="space-y-3">
                  {economicData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name={item.icon as any} size={16} className="text-blue-600" />
                        <span className="text-xs font-medium">{item.metric}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">{item.value}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Символы государства */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Flag" className="text-red-700" />
                    Флаг
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <img 
                      src="https://cdn.poehali.dev/files/6bcc8670-6b40-4dab-b3e9-11135c31bf20.png" 
                      alt="Флаг Сашианийской Республики" 
                      className="w-full h-32 object-cover rounded border"
                    />
                    <p className="text-sm text-slate-600">
                      Вертикальные полосы белого, бордового и синего цветов. По центру — золотой герб: 
                      пшеничный колос с корнями, в нижней части колоса находится щит с изображением пучка трёх стрел.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Shield" className="text-amber-600" />
                    Герб
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="w-full h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded border flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl">🌾</div>
                        <div className="text-2xl">🛡️</div>
                        <div className="text-xs">⚔️⚔️⚔️</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      Щит с изображением пшеничного колоса, символизирующего плодородие, и щит с изображением 
                      трёх стрел, означающий стойкость Сашиании, единство и прогресс.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                  <CardDescription>Северо-запад материка Альвания</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <strong className="text-blue-800">Север:</strong>
                      <div className="text-sm text-blue-700">Сашианийский океан</div>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <strong className="text-red-800">Восток:</strong>
                      <div className="text-sm text-red-700">Кусарийская Демократическая Республика</div>
                      <div className="text-xs text-red-600">Исторические споры за приграничные территории</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <strong className="text-green-800">Юг:</strong>
                      <div className="text-sm text-green-700">Государство Кальвария</div>
                      <div className="text-xs text-green-600">Союзник в обороне и торговле</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <strong className="text-purple-800">Запад:</strong>
                      <div className="text-sm text-purple-700">Королевство Вестмарк</div>
                      <div className="text-xs text-purple-600">Торговые связи, поддерживает политику Сашиании</div>
                    </div>
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
                  <div className="border-l-4 border-gray-400 pl-4">
                    <h3 className="font-semibold text-gray-800">Колониальный период</h3>
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
                    <div><strong>ВВП на душу:</strong> 50,400 сашинов</div>
                    <div><strong>Рост ВВП:</strong> 4,8%</div>
                    <div><strong>Безработица:</strong> 3,1%</div>
                    <div><strong>Инфляция:</strong> 2,8%</div>
                    <div><strong>Госбюджет:</strong> 360 млрд сашинов</div>
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

          {/* Бюджет */}
          <TabsContent value="budget" className="space-y-6">
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
                    {militaryBranches.map((branch) => (
                      <div 
                        key={branch.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                          selectedMilitaryBranch === branch.id ? 'border-red-500 bg-red-50' : 'border-slate-200'
                        }`}
                        onClick={() => setSelectedMilitaryBranch(selectedMilitaryBranch === branch.id ? null : branch.id)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{branch.name}</h4>
                          <Badge variant="secondary">{branch.personnel}</Badge>
                        </div>
                        {selectedMilitaryBranch === branch.id && (
                          <div className="mt-3 pt-3 border-t space-y-2">
                            {branch.equipment.map((item, index) => (
                              <div key={index} className="text-sm text-slate-600">• {item}</div>
                            ))}
                          </div>
                        )}
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
                  5 провинций и 2 столичных округа (общее население: 23,8 млн)
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
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">{province.name}</h3>
                            <Badge variant={province.type === 'Столичный округ' ? 'default' : 'secondary'} className="text-xs">
                              {province.type}
                            </Badge>
                          </div>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
            </div>

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
          </TabsContent>

          {/* Международные отношения */}
          <TabsContent value="international" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Globe" className="text-cyan-600" />
                  Международные отношения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Союзники</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-green-100 text-green-800">Кальвария</Badge>
                          <span className="text-sm">Государство-союзник</span>
                        </div>
                        <div className="text-xs text-green-700">Союзник в обороне и торговле</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-green-100 text-green-800">Вестмарк</Badge>
                          <span className="text-sm">Королевство-партнёр</span>
                        </div>
                        <div className="text-xs text-green-700">Торговые связи, активно поддерживает политику Сашиании</div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Противники</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-red-100 text-red-800">Кусария</Badge>
                          <span className="text-sm">Демократическая Республика</span>
                        </div>
                        <div className="text-xs text-red-700">Споры за газовые месторождения и политико-исторические различия</div>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-red-100 text-red-800">Ортания</Badge>
                          <span className="text-sm">Региональная сверхдержава</span>
                        </div>
                        <div className="text-xs text-red-700">Спонсирует ВПК Кусарии, споры за бывшую колониальную историю</div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Международные организации</h4>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">Совет наций</Badge>
                      <Badge variant="outline">Организация Объединённой Экологической Сети</Badge>
                      <Badge variant="outline">Всемирный Торговый Союз</Badge>
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
                      <div>• Космическая программа (40% от науки)</div>
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