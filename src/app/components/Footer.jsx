import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-black py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex justify-center md:justify-start">
            <Image
              alt="ligaCubb"
              width={150}
              height={50}
              src="/logos/logocubb.png"
            />
          </div>
      
          <div className="flex space-x-4 md:mt-0">
            <Link href="https://facebook.com/ligacubb" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-6 h-6 text-black hover:text-red-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.412c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.796.143v3.243l-1.918.001c-1.505 0-1.796.716-1.796 1.766v2.31h3.59l-.467 3.621h-3.123V24h6.123c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.406 0 22.675 0z" />
              </svg>
            </Link>
            <Link href="https://instagram.com/ligacubb" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-6 h-6 text-black hover:text-red-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.97.24 2.422.405a4.927 4.927 0 011.675 1.073 4.927 4.927 0 011.073 1.675c.165.451.349 1.216.405 2.422.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 1.97-.405 2.422a4.927 4.927 0 01-1.073 1.675 4.927 4.927 0 01-1.675 1.073c-.451.165-1.216.349-2.422.405-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.97-.24-2.422-.405a4.927 4.927 0 01-1.675-1.073 4.927 4.927 0 01-1.073-1.675c-.165-.451-.349-1.216-.405-2.422-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.206.24-1.97.405-2.422a4.927 4.927 0 011.073-1.675 4.927 4.927 0 011.675-1.073c.451-.165 1.216-.349 2.422-.405 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.755 0 8.331.012 7.052.07 5.76.13 4.708.316 3.863.664a7.075 7.075 0 00-2.562 1.672 7.075 7.075 0 00-1.672 2.562c-.348.845-.534 1.897-.594 3.189-.058 1.279-.07 1.703-.07 5.048s.012 3.769.07 5.048c.06 1.292.246 2.344.594 3.189a7.075 7.075 0 001.672 2.562 7.075 7.075 0 002.562 1.672c.845.348 1.897.534 3.189.594 1.279.058 1.703.07 5.048.07s3.769-.012 5.048-.07c1.292-.06 2.344-.246 3.189-.594a7.075 7.075 0 002.562-1.672 7.075 7.075 0 001.672-2.562c.348-.845.534-1.897.594-3.189.058-1.279.07-1.703.07-5.048s-.012-3.769-.07-5.048c-.06-1.292-.246-2.344-.594-3.189a7.075 7.075 0 00-1.672-2.562 7.075 7.075 0 00-2.562-1.672c-.845-.348-1.897-.534-3.189-.594-1.279-.058-1.703-.07-5.048-.07zM12 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.163a3.998 3.998 0 110-7.997 3.998 3.998 0 010 7.997zm6.406-11.845a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.879 0z" />
              </svg>
            </Link>
          </div>
        </div>
          <div className="flex mt-3 flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left justify-end">
            <Link href="/admin" className="hover:text-red-600 transition-colors duration-300">Administración</Link>
            <Link href="mailto:ligacubb@gmail.com" className="hover:text-red-600 transition-colors duration-300">ligacubb@gmail.com</Link>
          </div>
          <div className="text-center text-sm text-gray-600">
              © {currentYear} Tomás Silvente. Todos los derechos reservados.
          </div>
      </div>
    </footer>
  );
}
