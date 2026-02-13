import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Phone, Mail, MessageCircle } from 'lucide-react';
import Logo from '../assets/teragroblack.jpg';
export default function Footer() {
  const whatsappUrl =
    "https://wa.me/905349765239?text=Merhaba%20TERAGRO,%20web%20siteniz%20%C3%BCzerinden%20ileti%C5%9Fime%20ge%C3%A7iyorum.";

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-12">

          {/* Brand */}
          <div>
            <div>
          <Link
  to="/"
  className="flex items-center gap-2 font-bold text-xl text-white mb-4"
>
<img src={Logo} alt="TERAGRO Logo" className="h-10 w-auto" /></Link>
        </div>
            <p className="text-sm text-gray-400">
              Tarımda güvenilir çözüm ortağınız. Bölgesel tecrübe, uluslararası standart.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
  <li>
    <Link to="/" className="hover:text-white transition-colors">
      Anasayfa
    </Link>
  </li>

  <li>
    <Link to="/faaliyetlerimiz" className="hover:text-white transition-colors">
      Faaliyetler
    </Link>
  </li>

  <li>
    <Link to="/hakkimizda" className="hover:text-white transition-colors">
      Kurumsal
    </Link>
  </li>

  <li>
    <Link to="/iletisim" className="hover:text-white transition-colors">
      İletişim
    </Link>
  </li>
</ul>
          </div>

          {/* Services */}
          <div>
  <h4 className="font-semibold text-white mb-4">Hizmetlerimiz</h4>
  <ul className="space-y-2">
    <li>
      <Link
        to="/faaliyetlerimiz#zirai-ilaclar"
        className="hover:text-white transition-colors"
      >
        Zirai İlaçlar
      </Link>
    </li>

    <li>
      <Link
        to="/faaliyetlerimiz#gubre-cozumleri"
        className="hover:text-white transition-colors"
      >
        Gübre Çözümleri
      </Link>
    </li>

    <li>
      <Link
        to="/damla-sulama"
        className="hover:text-white transition-colors"
      >
        Damla Sulama
      </Link>
    </li>

  
  </ul>
</div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">İletişim</h4>

            <div className="space-y-2 text-sm mb-4">
              <a
                href="tel:+905356048768"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={16} />
                +90 (534) 976 52 39
              </a>

              <a
                href="mailto:info@teragro.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={16} />
                info@teragro.com
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp ile Ulaş
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/mehmet-terzi-817163166/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#0077B5] hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/teragroziraat/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2026 TERAGRO. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}