import React from 'react';
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';

function Footer() {
  return (
    <>
      <footer className="absolute bottom-0 w-full">
        <div className="flex justify-center text-gray-800 bg-red-50">
          <div className="container flex flex-col items-center py-4">
            <p className="text-lg font-semibold text-red-900">
              Pharma | Todos os direitos reservados
            </p>
            <p className="text-sm text-gray-600">Siga-nos nas redes sociais</p>
            <div className="flex gap-4 mt-2">
              <LinkedinLogo
                size={32}
                className="text-red-600 hover:text-red-700"
              />
              <InstagramLogo
                size={32}
                className="text-red-600 hover:text-red-700"
              />
              <FacebookLogo
                size={32}
                className="text-red-600 hover:text-red-700"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
