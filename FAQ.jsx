import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: "Vad ska man göra om man inte hinner ordna med bouppteckning i tid?",
        answer: "När någon har avlidit, ska bouppteckning förrättas inom tre månader. Men det går att inom den här tiden be Skatteförvaltningen om tilläggstid att förrätta bouppteckning, om det finns särskilda skäl, till exempel om det finns så mycket att utreda att tiden annars inte räcker till."
      },
      {
        question: "Måste en arvinge ansvara för dödsboets skulder?",
        answer: "Om bouppteckningen inte förrättas i tid, ansvarar delägarna i dödsboet för den avlidnas skulder. Ansvarig för att se till att bouppteckningen sker inom den här tiden är, enligt huvudregeln, den dödsbodelägare som förvaltar den avlidnas egendom. Bouppteckningsinstrumentet ska lämnas in till Skatteförvaltningen inom en månad efter att bouppteckningen har förrättats.\n Så länge en arvinge eller testamentstagare inte befattar sig med boet, det vill säga vidtar åtgärder för att få något ur boet i egenskap av arvinge eller testamentstagare, har hon eller han inget ansvar för dödsboets skulder.\n Om en arvinge tar på sig rollen att aktivt förvalta dödsboet kan han eller hon bli skadeståndsskyldig om dödsboets ekonomi hanteras vårdslöst.\n En arvinge kan också avsäga sig sitt arv."
      },
      {
        question: "Vilka dokument behövs vid en bouppteckning?",
        answer: "Exempel på dokument som kan behövas är identitetsbevis, släktutredning, testamente, äktenskapsförord, saldo- och ränteintyg från banker, lånehandlingar, försäkringsbesked, information om eventuella fastigheter och bostäder samt verifikat över kostnader."
      },
      {
        question: "Hur många fysiska möten är det frågan om och vem är med på dem?",
        answer: "I praktiken förbereds bouppteckningsmötet, den så kallade förrättningen, så att delägarna i dödsboet på förhand har fått möjlighet att bekanta sig med utkastet till bouppteckningsinstrument, som handlingen kallas. Den färdigt formulerade handlingen gås sedan igenom på det fysiska mötet och till sist undertecknas den.\n Det inledande mötet, där bouppteckningen förbereds (vanligen med bara en av arvingarna), kan ordnas antingen per telefon, som videomöte eller som fysiskt möte.\n Vid bouppteckningen är den arvinge som så att säga uppger boet närvarande tillsammans med de två gode männen som värderar och bevittnar. De övriga arvingarna väljer själva om de är närvarande eller inte."
      },
        {
        question: "Går det att skifta arvet i samband med bouppteckningen?",
        answer: "Varje dödsbo har sin egen situation, och alltid fungerar det inte att genast förrätta arvskifte direkt efter bouppteckningen. För att det ska vara möjligt, måste dödsboets samtliga skulder vara betalda eller säkerhet vara ställda för skulderna. Om den avlidna var gift, kan det finnas ett testamente som gör det ofördelaktigt för arvingarna att kräva skifte. Men det kan vara möjligt med ett partiellt arvskifte, där endast en del av kvarlåtenskapen fördelas mellan arvingarna. Om det finns exempelvis fastigheter som ska säljas, är det smidigare att dödsboet säljer dem och sedan fördelas pengarna i ett arvskifte."
      },
      {
        question: "Vad kostar tjänsterna?",
        answer: "Kunden erbjuds ett fast pris genom en offert. På det viset vet kunden på förhand vad det slutliga priset blir och behöver inte orolig vänta på fakturan. I offerten kan finnas olika alternativa pris beroende på hur omfattande service som kunden önskar. Det finns inga dolda kostnader utan allt framgår av offerten, som kunden ska godkänna innan tjänsten börjar utföras.\n Om kunden föredrar att träffas i ett tillfälligt hyrt rum i stället för i kundens hem när bouppteckningen förrättas, är priset ändå det samma."
      },
      {
        question: "På vilka språk erbjuds tjänsterna?",
        answer: "Tjänsterna erbjuds enbart på svenska"
      },

]

export const FAQ = () =>{
    const [openIndex, setOpenIndex] = useState(null);


    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return(
        <section className="bg-[#EDE4DC] py-20" 
        id="FAQ">

      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-[#7A4F2C] mb-10">
          Vanliga frågor
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[#D8CFC1] bg-white rounded-xl p-6 shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-[#2B2B2B] font-medium text-lg"
              >
                {item.question}
                <ChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#555] mt-4 overflow-hidden"
                  >
                    {/* Splits the answer into paragraps where \n is inserted */}
                    {item.answer.split('\n').map((paragraph, i) => (
                        <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}