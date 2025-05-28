import { motion } from 'framer-motion';

export const Dataskydd = () => {
  return (
    <section id="dataskydd" 
    className="bg-[#EDE4DC] py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl text-[#7A4F2C] mb-10"
        >
          Dataskydd
        </h2>
        <div className="space-y-6 text-[#2B2B2B] text-left">
          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Registrets namn</h3>
            <p>Kundregistret för Lindbergs juridiska tjänster</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Personuppgiftsansvarig och kontaktperson</h3>
            <p>Robin Lindberg</p>
            <p>Adress: Kockängen 7 A 26, 02250 ESBO (ej besöksadress)</p>
            <p>Telefonnummer: 045 78 75 86 87</p>
            <p>E-postadress: contact@robinlindberg.fi</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Syftet med behandlingen av personuppgifter</h3>
            <p>Personuppgifterna om kunden i kundregistret används enbart för att utföra tjänster för kunden.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Förvaringstid för personuppgifterna</h3>
            <p>Personuppgifterna förvaras så länge kundförhållandet varar. Fakturorna förvaras ändå även därefter.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Registrets datainnehåll</h3>
            <p>Registret innehåller uppgifter om namn, titel, kontaktuppgifter samt övriga uppgifter som behövs för att uppgöra juridiska dokument som kunden har beställt.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Källor som används för kundregistret</h3>
            <p>Uppgifterna i kundregistret består såväl av de registrerades egna anmälningar som vid behov av uppgifter från handlingar som företagaren på kundens vägnar har beställt, såsom exempelvis släktutredning eller värdering av fastighet.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Utlämnande av uppgifter</h3>
            <p>Uppgifterna i kundregistret lämnas inte ut utanför Lindbergs juridiska tjänster, förutom om det är nödvändigt för boutredningen. Exempelvis kan det bli nödvändigt att använda personuppgifter för att från myndigheter begära personbevis för släktutredning eller av en fastighetsmäklare begära en fastighetsvärdering.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Överföring av uppgifter utanför EU eller EES</h3>
            <p>Personuppgifter lämnas inte ut utanför EU-/EES-området, förutom om det är nödvändigt för boutredningen. Exempelvis kan det bli nödvändigt att använda personuppgifter för att från utländska myndigheter begära personbevis för släktutredning eller intyg på äganderätt till fastighet.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Automatiskt beslutsfattande och profilering</h3>
            <p>Inget automatiskt beslutsfattande och ingen automatisk profilering görs utifrån uppgifterna i personregistret.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Granskningsrätt</h3>
            <p>Du har rätt att be om tillgång till dina egna personuppgifter, det vill säga att granska de uppgifter som finns om dig i personregistret. Du kan skicka en begäran om kontroll av egna uppgifter per e-post på adressen contact@robinlindberg.fi. Uppgifterna sänds till dig med skyddad e-postförbindelse inom en månad.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Rätt att yrka på ändring av uppgift</h3>
            <p>Du har rätt att yrka på att dina personuppgifter ska rättas. Lämna in ett skriftligt yrkande på contact@robinlindberg.fi. I yrkandet på rättelse ska du nämna vilken uppgift som ska korrigeras och exakt vilken ändring du vill göra eller ange vilka kompletterande uppgifter du vill ha införda i registret.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#7A4F2C] mb-1">Avförande av uppgifter</h3>
            <p>Uppgifterna kan avföras på begäran. Lämna in en skriftlig begäran på contact@robinlindberg.fi. Notera att tjänsterna som du har beställt inte nödvändigtvis kan utföras, om uppgifterna avförs innan uppdraget är slutfört.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
