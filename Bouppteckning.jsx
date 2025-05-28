import { motion } from 'framer-motion';

export const Bouppteckning = () =>{
    return(
      <section id="bouppteckning" className="bg-[#EDE4DC] py-20">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
    {/* TEXTEN */}
    <div className="w-full md:w-1/2">
      <motion.h2
        className="text-3xl md:text-4xl text-[#7A4F2C] mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Vad är en bouppteckning?
      </motion.h2>

      <div className="space-y-6 text-[#2B2B2B] text-left">
        {[
          "När en nära anhörig går bort är sorgen tung, och många praktiska frågor kan kännas överväldigande. En av de viktigaste uppgifterna som enligt lag måste utföras är bouppteckningen.",
          "Att göra en bouppteckning innebär att kartlägga och dokumentera den avlidnas tillgångar och skulder, samt reda ut vem som är delägare i dödsboet. Enligt finsk lag ska bouppteckningen göras inom tre månader från dödsfallet. Observera att bouppteckningen inte är ett arvskifte – ingen blir alltså ägare till några tillgångar vid bouppteckningen.",
          "Jag erbjuder dig sakkunnig och vänlig hjälp med bouppteckningen. Mitt mål är att underlätta för dig genom att ta hand om processen på ett smidigt sätt, i den utsträckning du behöver mina tjänster. Jag hjälper även till med att samla in dokument om så önskas.",
          "Varje dödsbo är unikt, och jag anpassar mitt arbete efter just din situation. En väl genomförd bouppteckning är viktig eftersom den ligger till grund för beskattning av arvingarna och eventuella testamentstagare samt för det framtida arvskiftet.",
          "Om det bara finns en arvinge behövs inget arvskifte – arvingen får hela arvet med stöd av bouppteckningen och en släktutredning. Om arvet fördelas genom testamente, måste arvingen visa att testamentet har vunnit laga kraft.",
          "Jag åtar mig endast uppdrag där arvingarna är överens. Jag hanterar inga tvistemål i rätten.",
          "Du är varmt välkommen att kontakta mig via telefon eller e-post. Vi hörs!",
        ].map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
          >
            {text}
          </motion.p>
        ))}

        <motion.div
          className="mt-8 flex"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <a
            href="#kontakta"
            className="border border-[#F4EFEA] bg-[#3A2B1C] text-[#F4EFEA] py-3 px-10 gap-4 rounded-full font-medium transition-all duration-200 hover:bg-[#4A3826] hover:shadow-xl transition"
          >
            Kontakta mig
          </a>
        </motion.div>
      </div>
    </div>

    {/* BILD TILL HÖGER */}
    <motion.div
            className="w-full md:w-1/2 h-[42rem] rounded-xl shadow-md overflow-hidden relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "linear-gradient(rgba(122, 79, 44, 0.25), rgba(122, 79, 44, 0.25)), url('/public/shutterstock_533701939.jpg')"
              }}
            />
          </motion.div>
  </div>
</section>



)
}

      {/*  GAMLA VERSIONEN
        <section 
        id="bouppteckning" 
        className="bg-[#EDE4DC] py-20 ">
      <div className="max-w-3xl mx-auto px-4 ">
        <motion.h2 
          className="text-3xl md:text-4xl text-[#7A4F2C] mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Vad är en bouppteckning?
        </motion.h2>
        <div className="space-y-6 text-[#2B2B2B] max-w-3xl mx-auto text-left">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            När en nära anhörig går bort är sorgen tung, och många praktiska frågor kan kännas överväldigande.
            En av de viktigaste uppgifterna som enligt lag måste utföras är bouppteckningen.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Att göra en bouppteckning innebär att kartlägga och dokumentera den avlidnas tillgångar och skulder, samt
            reda ut vem som är delägare i dödsboet. Enligt finsk lag ska bouppteckningen göras inom tre månader från
            dödsfallet. Observera att bouppteckningen inte är ett arvskifte – ingen blir alltså ägare till några
            tillgångar vid bouppteckningen.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Jag erbjuder dig sakkunnig och vänlig hjälp med bouppteckningen. Mitt mål är att underlätta för dig genom
            att ta hand om processen på ett smidigt sätt, i den utsträckning du behöver mina tjänster. Jag hjälper
            även till med att samla in dokument om så önskas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Varje dödsbo är unikt, och jag anpassar mitt arbete efter just din situation. En väl genomförd bouppteckning är viktig eftersom den ligger till grund för beskattning av arvingarna och eventuella testamentstagare samt för det framtida arvskiftet.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            Om det bara finns en arvinge behövs inget arvskifte – arvingen får hela arvet med stöd av bouppteckningen
            och en släktutredning. Om arvet fördelas genom testamente, måste arvingen visa att testamentet har vunnit laga kraft.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Jag åtar mig endast uppdrag där arvingarna är överens. Jag hanterar inga tvistemål i rätten.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Du är varmt välkommen att kontakta mig via telefon eller e-post. Vi hörs!
          </motion.p>

          <motion.div
            className="mt-8 flex"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <a
              href="#kontakta" 
              className="border border-[#F4EFEA] bg-[#3A2B1C] text-[#F4EFEA] py-3 px-10 gap-4 rounded-full font-medium transition-all duration-200 hover:bg-[#4A3826] hover:shadow-xl transition"
            >
              Kontakta mig
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16"
          >
      <h2 className="text-2xl md:text-3xl text-[#7A4F2C] mb-6">Avvittring & Arvskifte</h2>
  
  <div className="space-y-4 text-[#2B2B2B]">
    <p>
      Med ett arvskiftesavtal fördelas kvarlåtenskapen efter den avlidna. I och med avtalet avslutas den gemensamma förvaltningen av dödsboet, som upphör.
    </p>
    <p>
      Det finns ingen tidsfrist för när arvskifte ska ske, men många gånger är det smidigast att skifta så snart som möjligt. Dock är utgångspunkten att boet blir oskiftat i änkans eller änklingens besittning, om det finns änka eller änkling och barn.
    </p>
    <p>
      Om någon fastighet ska säljas, kan det vara enklare att dödsboet först säljer fastigheten och därefter skiftas boet. Dödsboet måste betala sina skulder innan arvskifte kan förrättas. Väntar man länge med att skifta, finns det risk för att skiftet blir mer invecklat.
    </p>
    <p>
      Ägande- och besittningsrätt enligt arvskiftesavtalet inträder i och med avtalsparternas underskrifter, om parterna förbinder sig att inte klandra avtalet.
    </p>
    <p>
      Om den avlidna var gift (och giftorätten inte var utesluten med äktenskapsförord), görs i samma handling först avvittringen, där makarnas egendom separeras från varandra.
    </p>
    <p>
      Jag kan åta mig att göra upp avvittrings- och arvskiftesavtalet i situationer då arvingarna själva kan komma överens om hur arvet ska fördelas.
    </p>
  </div>
</motion.div>

          <hr className="my-12 border-t border-[#C7A76C]/40" />
          <div className="max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl text-[#7A4F2C] mb-4">
          Behöver du i stället till exempel hjälp med att skriva ett testamente eller göra en intressebevakningsfullmakt?
        </h3>
        <p className="text-[#2B2B2B]">
        Då kan du läsa mer om det på webbplatsen<br />
          <a
            href="https://robinlindberg.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-[#7A4F2C]"
          >
            robinlindberg.fi
          </a>
        </p>
      </div>
        
        </div>
      </div>   
        </section>
      */}
 