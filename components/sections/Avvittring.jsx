
import { motion } from 'framer-motion';

export const Avvittring = () =>{
    return(

<section className="bg-[#F4EFEA] py-20">
<div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
  {/* BILD TILL VÄNSTER */}
  <motion.div
            className="w-full md:w-1/2 h-[32rem] bg-[#EDE4DC] rounded-xl shadow-md overflow-hidden relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "linear-gradient(rgba(122, 79, 44, 0.25), rgba(122, 79, 44, 0.25)), url('/public/shutterstock_710995378.jpg')"
              }}
            />
          </motion.div>

 
  {/* TEXTEN */}
  <div className="w-full md:w-1/2">
    <motion.h2
      className="text-3xl md:text-4xl text-[#7A4F2C] mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Avvittring & arvskifte
    </motion.h2>

    <div className="space-y-6 text-[#2B2B2B] text-left">
      {[
        "Med ett arvskiftesavtal fördelas kvarlåtenskapen efter den avlidna. I och med avtalet avslutas den gemensamma förvaltningen av dödsboet, som upphör.",
        "Det finns ingen tidsfrist för när arvskifte ska ske, men många gånger är det smidigast att skifta så snart som möjligt. Dock är utgångspunkten att boet blir oskiftat i änkans eller änklingens besittning, om det finns änka eller änkling och barn.",
        "Om någon fastighet ska säljas, kan det vara enklare att dödsboet först säljer fastigheten och därefter skiftas boet. Dödsboet måste betala sina skulder innan arvskifte kan förrättas. Väntar man länge med att skifta, finns det risk för att skiftet blir mer invecklat.",
        "Ägande- och besittningsrätt enligt arvskiftesavtalet inträder i och med avtalsparternas underskrifter, om parterna förbinder sig att inte klandra avtalet.",
        "Om den avlidna var gift (och giftorätten inte var utesluten med äktenskapsförord), görs i samma handling först avvittringen, där makarnas egendom separeras från varandra.",
        "Jag kan åta mig att göra upp avvittrings- och arvskiftesavtalet i situationer då arvingarna själva kan komma överens om hur arvet ska fördelas.",
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
</div>
</section>
    )
}
