export function Mentions() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="mb-4 text-[#ff6600] font-['Kufam'] font-semi bold italic font-[Kufam] font-bold text-left leading-tight text-[30px]">
          Mentions légales
        </h1>

        <div className="space-y-8 text-[#4A4A4A]">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-light mb-4 italic text-[#93471c]">
              Éditeur du site
            </h2>
            <p className="leading-relaxed">
              <strong className="text-[#4a3030] text-[#492f2f] text-[#493030] text-[#473030] text-[#382e2e] text-[#2d2929] text-[#222020] text-[#161616] text-[#0b0b0b] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000]">Atelier de céramique Michèle Rey</strong>
              <br />
              Artisan céramiste
              <br/>
              Adresse du site : https://ogresdelaterre.fr/
              <br />
              SIREN : 41377747500026
              <br />
                9 rue basse, 21130 Auxonne, France              
            </p>
            <p className="mt-4 leading-relaxed">Email : rey.michele@hotmail.fr<br />Téléphone : +33(0)6 75 66 66 26</p>
          </section>

          {/* Directeur de publication */}
          <section>
            <h2 className="text-2xl font-light mb-4 italic text-[#93471c]">
              Directrice de la publication
            </h2>
            <p className="leading-relaxed font-bold text-[16px]">Michèle Rey</p>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="ttext-2xl font-light mb-4 italic text-[#93471c] text-[24px]">
              Hébergement
            </h2>
            <p className="leading-relaxed">
          
              <strong>OVH</strong> 2 rue kellermann, 59100 Roubaix, France  
            </p>
          </section>

          {/* Conception et développement */}
          <section>
            <h2 className="text-2xl font-light mb-4 italic text-[#93471c]">
              Conception et développement
            </h2>
            <p className="leading-relaxed">Site web réalisé par :<br /><strong className="">Design </strong> Carlos Altieri<br /> <strong>Développement </strong>Quentin Altieri<br /><strong>Photographies </strong> Michèle Rey</p>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-light mb-4 italic text-[#93471c]">
              Propriété intellectuelle
            </h2>
            <p className="leading-relaxed">L'ensemble des contenus présents sur ce site (textes, images, photographies, créations céramiques) sont la propriété exclusive de            Michèle Rey, sauf mention contraire.</p>
            <p className="mt-4 leading-relaxed">
              Toute reproduction, même partielle, est interdite
              sans autorisation préalable écrite.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-light mb-4 italic text-[#93471c]">
              Protection des données personnelles
            </h2>
            <p className="leading-relaxed">
              Conformément au Règlement Général sur la
              Protection des Données (RGPD) et à la loi
              Informatique et Libertés, vous disposez d'un droit
              d'accès, de rectification et de suppression des
              données vous concernant.
            </p>
            <p className="mt-4 leading-relaxed">Pour exercer ce droit, vous pouvez nous contacter à l'adresse : rey.michele@hotmail.fr</p>
            <p className="mt-4 leading-relaxed">
              Les informations recueillies via le formulaire de
              contact sont destinées uniquement à répondre à vos
              demandes et ne sont en aucun cas transmises à des
              tiers.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-light mb-4 italic text-[#93471c]">
              Cookies
            </h2>
            <p className="leading-relaxed">
              Ce site n'utilise pas de cookies de suivi ou de
              publicité. Seuls des cookies strictement
              nécessaires au fonctionnement du site peuvent être
              utilisés.
            </p>
          </section>

          {/* Crédits photos */}
          <section>
            <h2 className="text-2xl font-light mb-4 italic text-[#93471c]">
              Crédits photographiques
            </h2>
            <strong>Photographies des créations et d'atelier</strong> Michèle Rey
          </section>
        </div>

        {/* Date de mise à jour */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-500">Dernière mise à jour : avril 2026</p>
        </div>
      </div>
    </div>
  );
}