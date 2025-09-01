import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: 'Code',
      title: 'Веб-разработка',
      description: 'Создаем современные веб-приложения и сайты с использованием новейших технологий',
      technologies: ['React', 'Vue.js', 'Node.js', 'TypeScript']
    },
    {
      icon: 'Smartphone',
      title: 'Мобильная разработка',
      description: 'Разрабатываем нативные и кроссплатформенные мобильные приложения',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      icon: 'Palette',
      title: 'UI/UX Дизайн',
      description: 'Создаем интуитивные и красивые пользовательские интерфейсы',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
    },
    {
      icon: 'Cloud',
      title: 'DevOps & Облако',
      description: 'Настраиваем инфраструктуру и автоматизируем процессы разработки',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    }
  ];

  const portfolio = [
    {
      title: 'E-commerce платформа',
      description: 'Полнофункциональный интернет-магазин с административной панелью',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/img/62305d43-475b-46ec-884e-7dc488d4425c.jpg'
    },
    {
      title: 'Мобильное приложение банка',
      description: 'Безопасное приложение для управления финансами',
      tech: ['React Native', 'Firebase', 'Biometric'],
      image: '/img/effab422-7f48-4dd4-8741-71a8f4718c5e.jpg'
    },
    {
      title: 'SaaS платформа аналитики',
      description: 'Инструмент для анализа данных и создания отчетов',
      tech: ['Vue.js', 'Python', 'PostgreSQL'],
      image: '/img/524acd73-1573-416e-a7af-f446c355ebae.jpg'
    }
  ];

  const team = [
    {
      name: 'Алексей Морозов',
      role: 'Tech Lead & Fullstack Developer',
      experience: '8+ лет',
      avatar: '/api/placeholder/150/150',
      skills: ['React', 'Node.js', 'Python', 'AWS']
    },
    {
      name: 'Мария Петрова',
      role: 'UI/UX Designer',
      experience: '6+ лет',
      avatar: '/api/placeholder/150/150',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems']
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Mobile Developer',
      experience: '5+ лет',
      avatar: '/api/placeholder/150/150',
      skills: ['React Native', 'Flutter', 'iOS', 'Android']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-gray via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-tech-primary to-tech-secondary rounded-xl flex items-center justify-center">
                <Icon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-tech-dark">TechCraft</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-tech-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-600 hover:text-tech-primary transition-colors">Портфолио</a>
              <a href="#team" className="text-gray-600 hover:text-tech-primary transition-colors">Команда</a>
              <a href="#contact" className="text-gray-600 hover:text-tech-primary transition-colors">Контакты</a>
            </div>
            
            <Button className="bg-gradient-to-r from-tech-primary to-tech-secondary hover:from-tech-secondary hover:to-tech-primary">
              Обсудить проект
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-tech-primary/10 to-tech-secondary/10 rounded-full mb-8">
              <Icon name="Sparkles" className="w-4 h-4 text-tech-primary mr-2" />
              <span className="text-tech-primary font-medium">Инновационные решения для вашего бизнеса</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-tech-dark mb-6">
              Создаём цифровые
              <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent block">
                продукты будущего
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Разрабатываем веб-приложения, мобильные приложения и digital-продукты, 
              которые помогают бизнесу расти и развиваться в цифровой эпохе
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-tech-primary to-tech-secondary hover:from-tech-secondary hover:to-tech-primary text-lg px-8 py-6">
                <Icon name="Rocket" className="w-5 h-5 mr-2" />
                Запустить проект
              </Button>
              <Button size="lg" variant="outline" className="border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white text-lg px-8 py-6">
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-primary mb-2">100+</div>
              <div className="text-gray-600">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-primary mb-2">50+</div>
              <div className="text-gray-600">Клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-primary mb-2">5+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-primary mb-2">24/7</div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-tech-dark mb-6">
              Наши <span className="text-tech-primary">услуги</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный цикл разработки от идеи до запуска и поддержки
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`p-6 cursor-pointer transition-all duration-300 border-2 ${
                    activeService === index
                      ? 'border-tech-primary bg-gradient-to-r from-tech-primary/5 to-tech-secondary/5'
                      : 'border-gray-200 hover:border-tech-primary/50'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeService === index
                        ? 'bg-gradient-to-r from-tech-primary to-tech-secondary text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon name={service.icon as any} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-tech-dark">{service.title}</h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-tech-primary/5 to-tech-secondary/5 p-8 rounded-2xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-tech-primary to-tech-secondary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={services[activeService].icon as any} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-tech-dark mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {services[activeService].description}
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-tech-dark">Технологии:</h4>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-tech-primary border border-tech-primary/20 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-tech-gray to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-tech-dark mb-6">
              Наше <span className="text-tech-primary">портфолио</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Реальные проекты, которые приносят результат нашим клиентам
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0">
                <div className="aspect-video bg-gradient-to-br from-tech-primary/10 to-tech-secondary/10 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-tech-dark mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-tech-primary/10 text-tech-primary text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white group-hover:bg-tech-primary group-hover:text-white transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-tech-dark mb-6">
              Наша <span className="text-tech-primary">команда</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Опытные специалисты, которые создают качественные продукты
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-tech-primary to-tech-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-tech-dark mb-2">{member.name}</h3>
                  <p className="text-tech-primary font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-tech-gray text-gray-700 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-tech-dark to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Готовы начать <span className="text-tech-accent">проект?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Расскажите нам о своей идее, и мы поможем воплотить её в жизнь
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-tech-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-gray-300">+7 (999) 123-45-67</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-tech-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-300">hello@techcraft.dev</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-tech-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Telegram</h3>
                <p className="text-gray-300">@techcraft_dev</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-tech-accent to-blue-500 hover:from-blue-500 hover:to-tech-accent text-lg px-8 py-6">
              <Icon name="Send" className="w-5 h-5 mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-tech-dark text-white border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-tech-primary to-tech-secondary rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-heading font-bold">TechCraft</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-tech-primary rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <Icon name="Github" className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-tech-primary rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <Icon name="Linkedin" className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-tech-primary rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <Icon name="Twitter" className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 TechCraft. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}