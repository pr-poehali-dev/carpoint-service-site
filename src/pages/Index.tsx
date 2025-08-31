import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import AnimatedSection from '@/components/AnimatedSection';
import BookingModal from '@/components/BookingModal';

export default function Index() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const services = [
    {
      title: "Замена масла",
      price: "от 1 200 ₽",
      description: "Быстрая замена масла и фильтров — 30–40 мин",
      icon: "Droplets"
    },
    {
      title: "Диагностика двигателя", 
      price: "от 1 500 ₽",
      description: "Компьютерная диагностика Check Engine + распечатка результатов",
      icon: "Laptop"
    },
    {
      title: "Тормозная система",
      price: "от 2 500 ₽", 
      description: "Проверка и замена колодок, дисков, прокачка тормозов",
      icon: "Disc"
    },
    {
      title: "Ходовая часть",
      price: "от 2 000 ₽",
      description: "Замена амортизаторов, развал‑схождение, рулевые",
      icon: "Settings"
    },
    {
      title: "Ремонт двигателя и КПП",
      price: "по оценке",
      description: "Профессиональный ремонт и восстановление узлов", 
      icon: "Wrench"
    }
  ];

  const features = [
    {
      icon: "Award",
      title: "15+ лет опыта",
      description: "Сертифицированные мастера (ASE)"
    },
    {
      icon: "Calculator",
      title: "Прозрачные цены",
      description: "Бесплатная диагностика"
    },
    {
      icon: "Calendar",
      title: "Онлайн‑запись",
      description: "Напоминания о визите"
    },
    {
      icon: "Zap",
      title: "Передовые технологии",
      description: "Современное оборудование"
    },
    {
      icon: "Star",
      title: "Довольные клиенты",
      description: "Примеры работ до/после"
    },
    {
      icon: "MapPin", 
      title: "Удобное расположение",
      description: "Уютная зона ожидания"
    }
  ];

  const process = [
    { step: 1, title: "Заявка по телефону", icon: "Phone" },
    { step: 2, title: "Выезд диагностики или прием в сервис", icon: "Car" },
    { step: 3, title: "Предварительный осмотр и составление сметы", icon: "FileText" },
    { step: 4, title: "Работы с фотоотчетом и согласованием", icon: "Camera" },
    { step: 5, title: "Проверка качества и финальный тест-драйв", icon: "CheckCircle" },
    { step: 6, title: "Передача ключей и чека", icon: "Key" },
    { step: 7, title: "Пакет бонусов для постоянных клиентов", icon: "Gift" }
  ];

  const reviews = [
    {
      name: "Александр П.",
      car: "Hyundai Solaris",
      text: "Приехал на плановое ТО — всё чётко, по записи, без навязываний. Мастера вежливые, подробно объяснили, что заменили. Через час был уже на дороге. Рекомендую!"
    },
    {
      name: "Мария С.",
      car: "Volkswagen Tiguan", 
      text: "Обратилась с проблемой по подвеске — в другом сервисе \"разводили\" на лишние детали. Здесь всё по делу, показали износ, согласовали смету заранее. Машина теперь едет как новая."
    },
    {
      name: "Игорь К.",
      car: "BMW X5",
      text: "Не могли найти причину ошибки двигателя, пока не приехал сюда. Ребята грамотно провели диагностику, устранили проблему без лишнего \"ремонта ради ремонта\". Профессионалы."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-car-gray to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-car-orange to-orange-600 rounded-xl flex items-center justify-center">
                  <Icon name="Car" className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-heading font-bold text-car-dark">CarPoint</span>
              </div>
              
              <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                <a href="#about" className="text-gray-700 hover:text-car-orange transition-colors font-medium text-sm xl:text-base">О нас</a>
                <a href="#process" className="text-gray-700 hover:text-car-orange transition-colors font-medium text-sm xl:text-base">Процесс</a>
                <a href="#services" className="text-gray-700 hover:text-car-orange transition-colors font-medium text-sm xl:text-base">Услуги</a>
                <a href="#reviews" className="text-gray-700 hover:text-car-orange transition-colors font-medium text-sm xl:text-base">Отзывы</a>
                <a href="#contacts" className="text-gray-700 hover:text-car-orange transition-colors font-medium text-sm xl:text-base">Контакты</a>
              </nav>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 text-xs lg:text-sm">
              <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
                <div className="flex items-center gap-2 text-car-blue">
                  <Icon name="Phone" className="w-4 h-4" />
                  <span className="font-semibold">+7 (933) 611-32-28</span>
                </div>
                <div className="hidden lg:flex items-center gap-2 text-car-blue">
                  <Icon name="MapPin" className="w-4 h-4" />
                  <span>г. Москва, ул. Гагарина, 15</span>
                </div>
                <div className="flex items-center gap-2 text-car-blue">
                  <Icon name="Clock" className="w-4 h-4" />
                  <span>10:00-22:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-car-blue/90 to-car-dark/80"></div>
        <div className="absolute inset-0">
          <img 
            src="/img/f3fbd931-0b02-4b0c-b8be-5a19df90e65a.jpg" 
            alt="Автосервис CarPoint"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Надёжный автосервис <br className="hidden md:block" />
            <span className="text-car-orange">в Москве</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto px-4">
            Ремонт, обслуживание и диагностика — быстро, качественно, удобно
          </p>
          <Button 
            size="lg" 
            className="bg-car-orange hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Wrench" className="w-4 md:w-5 h-4 md:h-5 mr-2" />
            Услуги
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-car-dark mb-6">
              Точка, с которой начинается <br className="hidden md:block" />
              <span className="text-car-orange">уверенность в авто</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-car-orange to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Icon name={feature.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading text-car-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-car-gray to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-car-dark mb-6">
              Ваш автомобиль — <br />
              <span className="text-car-orange">в надёжных руках</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <AnimatedSection key={index} animation="slide-in-left" delay={index * 150}>
                <Card className="process-step p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-car-orange text-white rounded-xl flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Icon name={item.icon as any} className="w-6 h-6 text-car-blue" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium">{item.title}</p>
                </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-car-dark mb-6">
              Услуги нашего <span className="text-car-orange">автосервиса</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card className="service-card p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-car-orange to-orange-600 rounded-xl flex items-center justify-center">
                      <Icon name={service.icon as any} className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-car-blue text-white px-3 py-1 text-sm font-semibold">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-heading text-car-dark">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 italic">
                    {service.description}
                  </CardDescription>
                </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-car-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => setIsBookingOpen(true)}
            >
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-car-gray to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-car-dark mb-6">
              Превращаем наш опыт — <br />
              <span className="text-car-orange">в ваш результат!</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <AnimatedSection key={index} animation="slide-in-right" delay={index * 200}>
                <Card className="review-card p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-car-orange to-orange-600 rounded-full flex items-center justify-center">
                      <Icon name="User" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-heading text-car-dark">{review.name}</CardTitle>
                      <p className="text-car-blue font-medium text-sm">{review.car}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic leading-relaxed">"{review.text}"</p>
                  <div className="flex text-car-orange mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-in">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-car-dark mb-6">
                Свяжитесь с нами —<br className="hidden md:block" />
                <span className="text-car-orange">мы всегда на связи!</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Приезжайте к нам или оставьте заявку — ответим быстро и поможем решить любые вопросы по вашему автомобилю
              </p>
            </AnimatedSection>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <AnimatedSection animation="slide-in-left">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-car-gray to-slate-100 p-8 rounded-2xl">
                  <h3 className="text-2xl font-heading font-bold text-car-dark mb-6">Контактная информация</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-car-orange rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-car-dark mb-1">Телефон</h4>
                        <p className="text-xl font-bold text-car-orange">+7 (933) 611-32-28</p>
                        <p className="text-sm text-gray-600">Звоните ежедневно с 10:00 до 22:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-car-blue rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-car-dark mb-1">Адрес</h4>
                        <p className="text-lg text-gray-700">г. Москва, ул. Гагарина, 15</p>
                        <p className="text-sm text-gray-600">Удобная парковка, рядом с метро</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-car-dark mb-1">Режим работы</h4>
                        <p className="text-lg text-gray-700">Ежедневно: 10:00 — 22:00</p>
                        <p className="text-sm text-gray-600">Без выходных и перерывов</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-car-dark mb-1">Email</h4>
                        <p className="text-lg text-gray-700">info@carpoint-moscow.ru</p>
                        <p className="text-sm text-gray-600">Ответим в течение часа</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="bg-gradient-to-br from-car-orange/10 to-orange-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-car-dark mb-4">Мы в социальных сетях</h4>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-car-orange hover:bg-orange-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                      <Icon name="MessageCircle" className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="w-12 h-12 bg-purple-500 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                      <Icon name="Instagram" className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                      <Icon name="Send" className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                      <Icon name="Phone" className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">Подписывайтесь на наши новости и акции</p>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Contact Form */}
            <AnimatedSection animation="slide-in-right">
              <Card className="border-0 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-heading text-car-dark">
                    Быстрая связь
                  </CardTitle>
                  <CardDescription className="text-base">
                    Оставьте сообщение — перезвоним в течение 15 минут
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-car-orange focus:border-transparent transition-all"
                        placeholder="Как к вам обращаться?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Номер телефона *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-car-orange focus:border-transparent transition-all"
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-2">
                        Интересующая услуга
                      </label>
                      <select 
                        id="contact-service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-car-orange focus:border-transparent transition-all"
                      >
                        <option value="">Выберите услугу</option>
                        <option value="oil">Замена масла</option>
                        <option value="diagnostics">Диагностика двигателя</option>
                        <option value="brakes">Тормозная система</option>
                        <option value="suspension">Ходовая часть</option>
                        <option value="engine">Ремонт двигателя и КПП</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                        Сообщение
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-car-orange focus:border-transparent transition-all resize-none"
                        placeholder="Опишите вашу проблему или вопрос..."
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-car-orange hover:bg-orange-600 text-white py-3 text-lg font-semibold"
                    >
                      <Icon name="Send" className="w-5 h-5 mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                  
                  <div className="text-center pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-3">Или запишитесь прямо сейчас:</p>
                    <Button 
                      className="bg-car-blue hover:bg-blue-700 text-white px-6 py-2"
                      onClick={() => setIsBookingOpen(true)}
                    >
                      <Icon name="Calendar" className="w-4 h-4 mr-2" />
                      Онлайн-запись
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          {/* Map Section */}
          <AnimatedSection animation="fade-in" delay={300}>
            <div className="mt-16">
              <h3 className="text-2xl font-heading font-bold text-car-dark text-center mb-8">
                Как нас найти
              </h3>
              <div className="bg-gradient-to-br from-car-gray to-slate-100 p-6 rounded-2xl">
                <div className="bg-gray-300 h-96 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-car-blue/20 to-car-orange/10"></div>
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-car-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="MapPin" className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-car-dark mb-2">CarPoint Автосервис</h4>
                    <p className="text-gray-700">г. Москва, ул. Гагарина, 15</p>
                    <p className="text-sm text-gray-600 mt-2">Интерактивная карта будет добавлена</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name="Car" className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-car-dark mb-1">Парковка</h5>
                    <p className="text-sm text-gray-600">Бесплатная для клиентов</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name="Train" className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-car-dark mb-1">Метро</h5>
                    <p className="text-sm text-gray-600">5 минут пешком</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name="Coffee" className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-car-dark mb-1">Зона ожидания</h5>
                    <p className="text-sm text-gray-600">Кофе и Wi-Fi</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-car-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-car-orange to-orange-600 rounded-xl flex items-center justify-center">
                  <Icon name="Car" className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-heading font-bold">CarPoint</span>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Надёжный автосервис с 15-летним опытом. Качественный ремонт, 
                диагностика и обслуживание автомобилей в Москве.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="w-5 h-5 text-car-orange" />
                  <span className="text-lg font-semibold">+7 (933) 611-32-28</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="w-5 h-5 text-car-orange" />
                  <span>г. Москва, ул. Гагарина, 15</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="w-5 h-5 text-car-orange" />
                  <span>10:00-22:00</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-semibold mb-6">Навигация</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-car-orange transition-colors">О нас</a></li>
                <li><a href="#process" className="text-gray-300 hover:text-car-orange transition-colors">Процесс</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-car-orange transition-colors">Услуги</a></li>
                <li><a href="#reviews" className="text-gray-300 hover:text-car-orange transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="text-gray-300 hover:text-car-orange transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-semibold mb-6">Связаться с нами</h3>
              <Button 
                className="bg-car-orange hover:bg-orange-600 text-white mb-6 w-full"
                onClick={() => setIsBookingOpen(true)}
              >
                <Icon name="MessageSquare" className="w-4 h-4 mr-2" />
                Связаться с нами
              </Button>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-700 hover:bg-car-orange rounded-lg flex items-center justify-center transition-colors cursor-pointer" title="VK">
                  <Icon name="MessageCircle" className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-700 hover:bg-car-orange rounded-lg flex items-center justify-center transition-colors cursor-pointer" title="Instagram">
                  <Icon name="Instagram" className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-700 hover:bg-car-orange rounded-lg flex items-center justify-center transition-colors cursor-pointer" title="Telegram">
                  <Icon name="Send" className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-700 hover:bg-car-orange rounded-lg flex items-center justify-center transition-colors cursor-pointer" title="WhatsApp">
                  <Icon name="Phone" className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2024 CarPoint. Все права защищены.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-car-orange transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-car-orange transition-colors">Условия обслуживания</a>
            </div>
          </div>
        </div>
      </footer>
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
}