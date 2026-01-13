import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "TrendingUp",
      title: "Покупайте, улучшайте, развивайте",
      description: "Начните с одной машины и постройте империю такси, которая приносит стабильный доход"
    },
    {
      icon: "Wallet",
      title: "Вывод реальных денег",
      description: "Зарабатывайте не игровую валюту, а реальные средства, которые можно вывести на кошелек"
    },
    {
      icon: "Zap",
      title: "Пассивный доход",
      description: "Ваши водители работают, даже когда вы заняты своими делами. Настройте логистику и получайте прибыль!"
    },
    {
      icon: "Shield",
      title: "Честность и прозрачность",
      description: "Проект существует более 3 лет и доказал свою надежность тысячам игроков"
    }
  ];

  const topPlayers = [
    { rank: 1, name: "TaxiKing777", earnings: "₽127,450", icon: "Trophy" },
    { rank: 2, name: "SpeedDriver", earnings: "₽98,320", icon: "Medal" },
    { rank: 3, name: "MoneyRush", earnings: "₽85,670", icon: "Award" },
    { rank: 4, name: "ProCabbie", earnings: "₽72,190", icon: "Star" },
    { rank: 5, name: "GoldWheel", earnings: "₽64,580", icon: "Sparkles" }
  ];

  const withdrawMethods = [
    { name: "Карты РФ", icon: "CreditCard", fee: "0%" },
    { name: "USDT (TRC-20)", icon: "Coins", fee: "1%" },
    { name: "ЮMoney", icon: "Wallet", fee: "2%" },
    { name: "Qiwi", icon: "BadgeRussianRuble", fee: "2.5%" }
  ];

  const gameProcess = [
    {
      step: "1",
      title: "Регистрация и старт",
      description: "Получите бонусную машину и начните зарабатывать с первых минут"
    },
    {
      step: "2",
      title: "Развитие парка",
      description: "Покупайте новые машины, улучшайте их класс и нанимайте водителей"
    },
    {
      step: "3",
      title: "Оптимизация маршрутов",
      description: "Выбирайте прибыльные районы и время работы для максимального дохода"
    },
    {
      step: "4",
      title: "Вывод прибыли",
      description: "Выводите заработанные деньги удобным способом — от ₽500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <div className="container mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <section className="text-center py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl"></div>
          <div className="relative z-10 animate-slide-up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/20 rounded-full border border-primary/40 neon-border">
              <Icon name="Zap" className="text-primary animate-pulse-glow" size={20} />
              <span className="text-sm font-medium">Запускай свой бизнес прямо сейчас</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 neon-glow">
              Хватит тратить время,<br />
              <span className="text-primary">пора управлять прибылью!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              <span className="font-bold text-foreground">Taxi Money:</span> Твой собственный автопарк с реальным доходом
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 neon-border hover:scale-105 transition-all animate-pulse-glow group">
                <Icon name="Rocket" className="mr-2 group-hover:animate-float" size={24} />
                Начать зарабатывать
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-secondary/50 hover:border-secondary hover:bg-secondary/10 transition-all">
                <Icon name="Play" className="mr-2" size={24} />
                Смотреть демо
              </Button>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              💰 Минимальный вывод от <span className="text-primary font-bold">₽500</span>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 neon-glow">
              Почему <span className="text-secondary neon-orange-glow">Taxi Money</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Устали от скучных кликеров? Станьте реальным таксопарком в игре!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all hover:scale-105 cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name={feature.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Game Process */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 neon-glow">
              Как работает <span className="text-primary">игровой процесс</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gameProcess.map((item, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-black neon-border animate-pulse-glow">
                  {item.step}
                </div>
                <Card className="pt-10 pb-6 px-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all text-center group hover:scale-105">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Top Players */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 neon-glow">
              🏆 Рейтинг <span className="text-secondary neon-orange-glow">игроков</span>
            </h2>
            <p className="text-lg text-muted-foreground">Лучшие предприниматели месяца</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {topPlayers.map((player, index) => (
              <Card 
                key={index}
                className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all hover:scale-102 cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${
                    index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 neon-border' :
                    index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500' :
                    index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                    'bg-primary/20'
                  }`}>
                    {player.rank}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg">{player.name}</div>
                    <div className="text-sm text-muted-foreground">Заработал за месяц</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-primary group-hover:animate-pulse-glow">{player.earnings}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Withdrawal Methods */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 neon-glow">
              Способы <span className="text-primary">вывода денег</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выбирайте удобный способ вывода средств. Минимальная сумма — <span className="text-primary font-bold">₽500</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {withdrawMethods.map((method, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/60 transition-all hover:scale-105 cursor-pointer group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:animate-float">
                  <Icon name={method.icon} className="text-secondary" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2">{method.name}</h3>
                <p className="text-sm text-muted-foreground">Комиссия: <span className="text-secondary font-bold">{method.fee}</span></p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/80 neon-border animate-pulse-glow">
              <Icon name="DollarSign" className="mr-2" size={24} />
              Вывести средства
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 border-primary/40 neon-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-pulse-glow"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 neon-glow">
                Готов начать зарабатывать?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Первый бонус ждет тебя при регистрации! Не упусти шанс построить свою империю такси.
              </p>
              <Button size="lg" className="text-xl px-12 py-8 neon-border hover:scale-110 transition-all animate-pulse-glow group">
                <Icon name="Rocket" className="mr-2 group-hover:animate-float" size={28} />
                Получить бонус и начать
              </Button>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default Index;