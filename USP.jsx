import { motion } from 'framer-motion';
import { MapPin, Tag, House } from "lucide-react";

export const USP = () =>{
    return(
        <section className='bg-[#F4EFEA] py-20'>
            <div className="max-w-7xl mx-auto px-4 text-center" >

                <div className="max-w-5xl mx-auto px-4 text-center">
                <motion.h1 
          className="text-3xl md:text-4xl text-[#7A4F2C] mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Jag erbjuder
        </motion.h1>
        </div>

      
                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    { icon:<House size={46}/>, title: "Flexibla mötesalternativ", description: "Jag kommer gärna på hembesök – videomöten och telefonsamtal går också bra." },
                    { icon:<MapPin size={46}/>, title: "Lokaler ordnas vid behov", description: "Jag står för rumshyror om hembesök inte är möjligt eller önskvärt." },
                    { icon:<Tag size={46}/>, title: "Trygg prissättning", description: "Ingen oro för kostnader – priset fastställs på förhand." },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      className="p-6 rounded-xl shadow-md hover:shadow-xl transition bg-[#FFFFFF] border border-[#E0D6C6]"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <h3 className="flex justify-center text-[#7A4F2C] mb-4">{service.icon}</h3>
                      <h3 className="text-2xl text-[#7A4F2C] mb-4">{service.title}</h3>
                      <p className="text-[#2B2B2B]">{service.description}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.blockquote
          className="italic text-[#2B2B2B] text-lg md:text-xl max-w-3xl mx-auto mt-16 border-t border-[#E0D6C6] pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
            >
            ”Att reda ut dödsboet för att göra det redo för bouppteckning är en förvånansvärt krävande juristuppgift.”<br />
            <span className="text-sm not-italic block mt-2 text-[#7A4F2C]">
              Ur verket <em>Perunkirjoitus ja perinnön veroseuraamukset</em>, fritt översatt
              </span>
                </motion.blockquote>
                    </div>

        </section>
    )
}

