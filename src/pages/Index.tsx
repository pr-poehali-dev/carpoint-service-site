import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: 'Zap',
      title: 'Neural Networks',
      description: 'Advanced AI systems and neural network architectures for next-generation applications',
      technologies: ['TensorFlow', 'PyTorch', 'Quantum AI', 'Deep Learning']
    },
    {
      icon: 'Cpu',
      title: 'Quantum Computing',
      description: 'Quantum algorithms and computing solutions for exponential performance gains',
      technologies: ['Qiskit', 'Cirq', 'Q#', 'Quantum ML']
    },
    {
      icon: 'Eye',
      title: 'AR/VR Reality',
      description: 'Immersive augmented and virtual reality experiences using cutting-edge tech',
      technologies: ['Unity', 'Unreal', 'WebXR', 'Spatial Computing']
    },
    {
      icon: 'Satellite',
      title: 'Blockchain & Web3',
      description: 'Decentralized applications and blockchain infrastructure for the metaverse',
      technologies: ['Solidity', 'IPFS', 'MetaMask', 'DeFi']
    }
  ];

  const portfolio = [
    {
      title: 'Neural Interface',
      description: 'Brain-computer interface for direct neural control of digital systems',
      tech: ['Neuralink', 'TensorFlow', 'Quantum'],
      image: '/img/62305d43-475b-46ec-884e-7dc488d4425c.jpg'
    },
    {
      title: 'Holographic Display',
      description: '3D holographic projection system with gesture recognition',
      tech: ['WebXR', 'Three.js', 'Computer Vision'],
      image: '/img/effab422-7f48-4dd4-8741-71a8f4718c5e.jpg'
    },
    {
      title: 'Quantum Database',
      description: 'Quantum-encrypted database with teleportation protocols',
      tech: ['Quantum DB', 'Encryption', 'Qiskit'],
      image: '/img/524acd73-1573-416e-a7af-f446c355ebae.jpg'
    }
  ];

  const team = [
    {
      name: 'Dr. Neo Anderson',
      role: 'Quantum AI Architect',
      experience: '2087+ years',
      avatar: '/api/placeholder/150/150',
      skills: ['Quantum ML', 'Neural Links', 'Time Computation', 'Singularity']
    },
    {
      name: 'Maya Cyberpunk',
      role: 'Holographic Designer',
      experience: '2085+ years',
      avatar: '/api/placeholder/150/150',
      skills: ['3D Holograms', 'AR/VR', 'Neural UX', 'Metaverse']
    },
    {
      name: 'Zero Protocol',
      role: 'Blockchain Sage',
      experience: '2088+ years',
      avatar: '/api/placeholder/150/150',
      skills: ['Web3', 'DeFi', 'Quantum Crypto', 'Digital Souls']
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cyber-dark/80 backdrop-blur-md border-b border-neon-cyan/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg blur animate-pulse opacity-70"></div>
                <Icon name="Cpu" className="w-7 h-7 text-cyber-dark relative z-10" />
              </div>
              <div>
                <span className="text-3xl font-mono font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">NEURO</span>
                <div className="text-xs text-neon-green font-mono">v2.0.88</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 font-mono">
              <a href="#services" className="text-gray-300 hover:text-neon-cyan transition-all duration-300 hover:drop-shadow-[0_0_8px_#00ffff]">SYSTEMS</a>
              <a href="#portfolio" className="text-gray-300 hover:text-neon-pink transition-all duration-300 hover:drop-shadow-[0_0_8px_#ff0080]">PROJECTS</a>
              <a href="#team" className="text-gray-300 hover:text-neon-purple transition-all duration-300 hover:drop-shadow-[0_0_8px_#8000ff]">OPERATORS</a>
              <a href="#contact" className="text-gray-300 hover:text-neon-green transition-all duration-300 hover:drop-shadow-[0_0_8px_#00ff00]">CONNECT</a>
            </div>
            
            <Button className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-cyan border border-neon-cyan/50 text-white font-mono shadow-[0_0_20px_#ff0080] hover:shadow-[0_0_30px_#00ffff] transition-all duration-300">
              INITIALIZE
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-cyber-blue/30 border border-neon-cyan/30 rounded-full mb-8 backdrop-blur-sm">
              <Icon name="Zap" className="w-5 h-5 text-neon-cyan mr-3 animate-pulse" />
              <span className="text-neon-cyan font-mono text-sm tracking-wider">NEURAL ENHANCEMENT PROTOCOL ACTIVE</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-mono font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-pulse">
                FUTURE
              </span>
              <br />
              <span className="text-white drop-shadow-[0_0_20px_#00ffff]">
                IS NOW
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-mono">
              Advanced neural networks • Quantum computing • Holographic interfaces
              <br />
              <span className="text-neon-green">/// Building tomorrow's technology today ///</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-pink text-cyber-dark font-mono font-bold text-lg px-10 py-6 shadow-[0_0_30px_#00ffff] hover:shadow-[0_0_40px_#ff0080] transition-all duration-500 border border-neon-cyan">
                <Icon name="Rocket" className="w-6 h-6 mr-3" />
                JACK IN
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-cyber-dark font-mono font-bold text-lg px-10 py-6 shadow-[0_0_20px_#ff0080] hover:shadow-[0_0_30px_#ff0080] transition-all duration-500">
                <Icon name="Eye" className="w-6 h-6 mr-3" />
                VIEW MATRIX
              </Button>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
            {[
              { value: '2088', label: 'YEAR', color: 'neon-cyan' },
              { value: '99.9%', label: 'UPTIME', color: 'neon-green' },
              { value: 'INFINITE', label: 'COMPUTE', color: 'neon-purple' },
              { value: 'QUANTUM', label: 'SPEED', color: 'neon-pink' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-3xl font-mono font-bold text-${stat.color} mb-2 drop-shadow-[0_0_10px_currentColor] group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 font-mono text-sm tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-dark"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-mono font-bold mb-6">
              <span className="text-neon-cyan drop-shadow-[0_0_20px_#00ffff]">NEURAL</span>
              <span className="text-white"> SYSTEMS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              /// Advanced technology stack for the digital future ///
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`p-8 cursor-pointer transition-all duration-500 border-2 bg-cyber-blue/5 backdrop-blur-sm ${
                    activeService === index
                      ? 'border-neon-cyan bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 shadow-[0_0_30px_#00ffff]'
                      : 'border-gray-700 hover:border-neon-purple/50 hover:shadow-[0_0_20px_#8000ff]'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeService === index
                        ? 'bg-gradient-to-r from-neon-cyan to-neon-purple shadow-[0_0_20px_#00ffff]'
                        : 'bg-gray-800 border border-gray-600'
                    }`}>
                      <Icon name={service.icon as any} className={`w-8 h-8 ${
                        activeService === index ? 'text-cyber-dark' : 'text-gray-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-mono font-bold text-white mb-2">{service.title}</h3>
                      <div className="text-neon-cyan font-mono text-sm">// SYSTEM ACTIVE //</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-cyber-blue/20 to-cyber-dark p-10 rounded-2xl border border-neon-purple/30 backdrop-blur-sm shadow-[0_0_50px_#8000ff]">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_#00ffff]">
                  <Icon name={services[activeService].icon as any} className="w-10 h-10 text-cyber-dark" />
                </div>
                <h3 className="text-3xl font-mono font-bold text-white mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-mono">
                  {services[activeService].description}
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-mono font-bold text-neon-green text-lg">TECH_STACK:</h4>
                <div className="flex flex-wrap gap-3">
                  {services[activeService].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-cyber-dark text-neon-cyan border border-neon-cyan/30 rounded font-mono text-sm hover:shadow-[0_0_10px_#00ffff] transition-all duration-300"
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
      <section id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-mono font-bold mb-6">
              <span className="text-neon-pink drop-shadow-[0_0_20px_#ff0080]">QUANTUM</span>
              <span className="text-white"> PROJECTS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              /// Reality-bending applications that transcend dimensions ///
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group bg-cyber-blue/5 border border-gray-700 hover:border-neon-pink hover:shadow-[0_0_40px_#ff0080] transition-all duration-500 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/60 to-transparent"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-mono font-bold text-white mb-4 group-hover:text-neon-pink transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-neon-purple/20 text-neon-purple text-xs font-mono rounded border border-neon-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-cyber-dark font-mono group-hover:shadow-[0_0_20px_#00ffff] transition-all duration-300">
                    EXECUTE
                    <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-blue/10 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-mono font-bold mb-6">
              <span className="text-neon-green drop-shadow-[0_0_20px_#00ff00]">NEURAL</span>
              <span className="text-white"> OPERATORS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              /// Enhanced humans interfacing with quantum systems ///
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-8 bg-cyber-blue/10 border border-gray-700 hover:border-neon-green hover:shadow-[0_0_30px_#00ff00] transition-all duration-500 backdrop-blur-sm group">
                <CardContent className="p-0">
                  <div className="w-32 h-32 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full mx-auto mb-6 flex items-center justify-center relative group-hover:shadow-[0_0_40px_#00ff00] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full blur animate-pulse opacity-70"></div>
                    <Icon name="User" className="w-16 h-16 text-cyber-dark relative z-10" />
                  </div>
                  <h3 className="text-2xl font-mono font-bold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">{member.name}</h3>
                  <p className="text-neon-cyan font-mono font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-6 font-mono">{member.experience}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-cyber-dark text-neon-green text-xs font-mono rounded border border-neon-green/30 hover:shadow-[0_0_10px_#00ff00] transition-all duration-300"
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
      <section id="contact" className="py-20 bg-gradient-to-br from-cyber-dark via-cyber-blue/20 to-cyber-dark text-white relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#00ffff_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-mono font-bold mb-6">
              <span className="text-neon-cyan drop-shadow-[0_0_30px_#00ffff]">ESTABLISH</span>
              <br />
              <span className="text-neon-pink drop-shadow-[0_0_30px_#ff0080]">CONNECTION</span>
            </h2>
            <p className="text-xl text-gray-300 mb-16 font-mono">
              /// Ready to transcend digital boundaries? ///
            </p>
            
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {[
                { icon: 'Radio', title: 'NEURAL_LINK', value: '+7 (2088) 555-0199', color: 'neon-cyan' },
                { icon: 'Mail', title: 'DATA_STREAM', value: 'neural@nexus.quantum', color: 'neon-pink' },
                { icon: 'MessageCircle', title: 'QUANTUM_CHAT', value: '@NeuroNexus_2088', color: 'neon-green' }
              ].map((contact, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-r from-${contact.color} to-neon-purple rounded-xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_${contact.color}] group-hover:shadow-[0_0_50px_${contact.color}] transition-all duration-500`}>
                    <Icon name={contact.icon as any} className="w-8 h-8 text-cyber-dark" />
                  </div>
                  <h3 className="font-mono font-bold text-white mb-2">{contact.title}</h3>
                  <p className={`text-${contact.color} font-mono`}>{contact.value}</p>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-cyan text-cyber-dark font-mono font-bold text-xl px-12 py-8 shadow-[0_0_50px_#00ffff] hover:shadow-[0_0_70px_#ff0080] transition-all duration-500 border-2 border-neon-cyan">
              <Icon name="Zap" className="w-6 h-6 mr-3" />
              INITIATE PROTOCOL
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-cyber-dark border-t border-neon-cyan/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center shadow-[0_0_20px_#00ffff]">
                <Icon name="Cpu" className="w-5 h-5 text-cyber-dark" />
              </div>
              <div>
                <span className="text-2xl font-mono font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">NEURO</span>
                <div className="text-xs text-neon-green font-mono">v2.0.88</div>
              </div>
            </div>
            
            <div className="flex space-x-6">
              {['Github', 'Twitter', 'Linkedin'].map((social, index) => (
                <div key={index} className="w-12 h-12 bg-cyber-blue/20 hover:bg-neon-purple/20 border border-gray-700 hover:border-neon-purple rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_#8000ff] cursor-pointer group">
                  <Icon name={social as any} className="w-5 h-5 text-gray-400 group-hover:text-neon-purple transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-mono">© 2088 NEURO NEXUS. ALL REALITIES RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}