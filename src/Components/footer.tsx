import { useAppSelector } from '../redux/hooks';
import { translations } from '../redux/translations';

export default function Footer() {
  const language = useAppSelector((state) => state.language.lang);
  const t = translations[language];
  const isRTL = language === 'fa';

  return (
    <footer className="flex h-screen text-white sm:h-auto" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-between px-4 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
          {/* About Us Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-2xl font-bold text-amber-600">{t.footerAboutTitle}</h3>
            <p className="text-center leading-relaxed text-gray-300 md:text-left">
              {t.footerAboutText}
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-center">
            <h3 className="mb-4 text-2xl font-bold text-amber-600">{t.footerContactTitle}</h3>
            <div className="space-y-2 text-center text-gray-300">
              <p className="flex items-center justify-center gap-2">
                <span className="text-amber-500">📍</span>
                {t.footerAddress}
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-amber-500">📞</span>
                {t.footerPhone}
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-amber-500">✉️</span>
                {t.footerEmail}
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-amber-500">⏰</span>
                {t.footerHours}
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="mb-4 text-2xl font-bold text-amber-600">{t.footerFollowTitle}</h3>
            <div className="flex gap-6">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-white transition duration-300 hover:scale-110 hover:text-amber-600"
                title="Facebook"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-white transition duration-300 hover:scale-110 hover:text-amber-600"
                title="Twitter"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.515 10 10 0 01-2.8 1.08 4.96 4.96 0 002.165-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-white transition duration-300 hover:scale-110 hover:text-amber-600"
                title="Instagram"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 17.5c-1.335 1.335-3.174 2.135-5.145 2.135-1.972 0-3.81-.8-5.145-2.135-1.335-1.335-2.135-3.173-2.135-5.145 0-1.972.8-3.81 2.135-5.145 1.335-1.335 3.173-2.135 5.145-2.135 1.972 0 3.81.8 5.145 2.135 1.335 1.335 2.135 3.173 2.135 5.145 0 1.972-.8 3.81-2.135 5.145m.408-10.237a1.508 1.508 0 110 3.016 1.508 1.508 0 010-3.016m-4.929-2.268c2.134 0 3.865 1.73 3.865 3.865s-1.73 3.865-3.865 3.865-3.865-1.73-3.865-3.865 1.73-3.865 3.865-3.865" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-white transition duration-300 hover:scale-110 hover:text-amber-600"
                title="LinkedIn"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.722h3.554v1.375c.427-.659 1.191-1.597 2.897-1.597 2.117 0 3.704 1.385 3.704 4.362v5.582zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.955.77-1.708 1.963-1.708 1.192 0 1.915.753 1.938 1.708 0 .949-.746 1.707-1.986 1.707zm-2.004 11.019h4.008v-9.722H3.333v9.722z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-white transition duration-300 hover:scale-110 hover:text-amber-600"
                title="YouTube"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
          <p>{t.footerCopyright}</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a href="/privacy-policy" className="transition duration-300 hover:text-amber-600">
              {t.privacyPolicy}
            </a>
            <a href="/terms-of-service" className="transition duration-300 hover:text-amber-600">
              {t.termsOfService}
            </a>
            <a href="/sitemap" className="transition duration-300 hover:text-amber-600">
              {t.sitemap}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
