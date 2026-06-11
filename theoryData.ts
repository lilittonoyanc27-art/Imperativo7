/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Chapter, VerbInfo } from './types';

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "1. Imperativo-ում ինչ անձեր կան",
    content: "Imperativo-ում սովորաբար օգտագործում ենք այս անձերը. **tú** (դու), **usted** (Դուք՝ հարգանքով), **nosotros/as** (եկեք մենք անենք), **vosotros/as** (դուք՝ ոչ պաշտոնական, Իսպանիա), **ustedes** (դուք / Դուք՝ մի քանի հոգի):\n\n**Yo** ձև չկա, որովհետև մարդը սովորաբար ինքն իրեն հրաման չի տալիս:\n\nՍխալ է՝ **Yo habla** ❌\n\nԲայց կարելի է ասել՝ **Tengo que estudiar.** (Ես պետք է սովորեմ):",
    examples: [
      { spanish: "Tengo que estudiar.", armenian: "Ես պետք է սովորեմ։" }
    ],
    table: {
      headers: ["Անձ", "Իմաստ"],
      rows: [
        ["tú", "դու"],
        ["usted", "Դուք՝ հարգանքով"],
        ["nosotros/as", "եկեք մենք անենք"],
        ["vosotros/as", "դուք՝ ոչ պաշտոնական, Իսպանիա"],
        ["ustedes", "դուք / Դուք՝ մի քանի հոգի"]
      ]
    }
  },
  {
    id: 2,
    title: "2. Imperativo-ի հիմնական տեսակները",
    content: "Իսպաներենում Imperativo-ն ունի երկու հիմնական ձև.\n\n1. **Imperativo afirmativo** — դրական հրամայական (երբ ասում ենք՝ **արա՛**)\n2. **Imperativo negativo** — ժխտական հրամայական (երբ ասում ենք՝ **մի՛ արա**)",
    examples: [
      { spanish: "Habla.", armenian: "Խոսի՛ր։ (Afirmativo)" },
      { spanish: "Come.", armenian: "Կեր։ (Afirmativo)" },
      { spanish: "Escribe.", armenian: "Գրի՛ր։ (Afirmativo)" },
      { spanish: "No hables.", armenian: "Մի՛ խոսիր։ (Negativo)" },
      { spanish: "No comas.", armenian: "Մի՛ կեր։ (Negativo)" },
      { spanish: "No escribas.", armenian: "Մի՛ գրիր։ (Negativo)" }
    ]
  },
  {
    id: 3,
    title: "3. Imperativo afirmativo — կանոնավոր բայեր",
    content: "Դրական հրամայականում ձևերը տարբեր են՝ ըստ անձի: Օրինակ վերցնենք երեք բայ.\n\n* **hablar** — խոսել\n* **comer** — ուտել\n* **vivir** — ապրել",
    table: {
      headers: ["Անձ", "Hablar (-AR)", "Comer (-ER)", "Vivir (-IR)"],
      rows: [
        ["tú", "habla", "come", "vive"],
        ["usted", "hable", "coma", "viva"],
        ["nosotros/as", "hablemos", "comamos", "vivamos"],
        ["vosotros/as", "hablad", "comed", "vivid"],
        ["ustedes", "hablen", "coman", "vivan"]
      ]
    }
  },
  {
    id: 4,
    title: "4. Tú ձև — դու (Դրական)",
    content: "**Tú** ձևը օգտագործում ենք ընկերների, երեխաների, ընտանիքի անդամների հետ:",
    examples: [
      { spanish: "Habla más despacio.", armenian: "Խոսի՛ր ավելի դանդաղ։ (-AR)" },
      { spanish: "Estudia español.", armenian: "Սովորի՛ր իսպաներեն։ (-AR)" },
      { spanish: "Mira la pizarra.", armenian: "Նայի՛ր գրատախտակին։ (-AR)" },
      { spanish: "Come la sopa.", armenian: "Կեր ապուրը։ (-ER)" },
      { spanish: "Bebe agua.", armenian: "Ջուր խմիր։ (-ER)" },
      { spanish: "Lee el text.", armenian: "Կարդա տեքստը։ (-ER)" },
      { spanish: "Escribe la frase.", armenian: "Գրի՛ր նախադասությունը։ (-IR)" },
      { spanish: "Abre la puerta.", armenian: "Բացի՛ր դուռը։ (-IR)" },
      { spanish: "Vive tranquilo.", armenian: "Ապրի՛ր հանգիստ։ (-IR)" }
    ]
  },
  {
    id: 5,
    title: "5. Tú ձևի հեշտ կանոնը",
    content: "Դրական հրամայականի **tú** ձևը շատ հաճախ նման է **él / ella / usted** ներկա ժամանակի (Presente de Indicativo) ձևին:",
    table: {
      headers: ["Infinitivo", "Presente él/ella", "Imperativo tú"],
      rows: [
        ["hablar", "habla", "habla"],
        ["comer", "come", "come"],
        ["vivir", "vive", "vive"]
      ]
    },
    examples: [
      { spanish: "Él habla.", armenian: "Նա խոսում է։" },
      { spanish: "Habla.", armenian: "Խոսի՛ր։" }
    ]
  },
  {
    id: 6,
    title: "6. Usted ձև — Դուք հարգանքով",
    content: "**Usted** ձևը օգտագործում ենք պաշտոնական կամ հարգալից խոսքում:\n\nԱյստեղ ձևը նման է **Presente de Subjuntivo**-ին (օգտագործվում են հակառակ վերջավորությունները. -AR բայերի համար՝ **-e**, -ER/-IR բայերի համար՝ **-coma / -viva**):",
    table: {
      headers: ["Infinitivo", "Usted ձև"],
      rows: [
        ["hablar", "hable"],
        ["comer", "coma"],
        ["vivir", "viva"]
      ]
    },
    examples: [
      { spanish: "Hable, por favor.", armenian: "Խոսե՛ք, խնդրում եմ։" },
      { spanish: "Coma despacio.", armenian: "Կերե՛ք դանդաղ։" },
      { spanish: "Escriba su nombre aquí.", armenian: "Գրե՛ք Ձեր անունը այստեղ։" }
    ]
  },
  {
    id: 7,
    title: "7. Ustedes ձև — դուք / Դուք մի քանի հոգի",
    content: "**Ustedes** ձևը օգտագործում ենք մի քանի մարդու դիմելիս (թե՛ հարգալից, թե՛ պաշտոնական, իսկ Լատինական Ամերիկայում՝ նաև մտերիմ):",
    table: {
      headers: ["Infinitivo", "Ustedes ձև"],
      rows: [
        ["hablar", "hablen"],
        ["comer", "coman"],
        ["vivir", "vivan"]
      ]
    },
    examples: [
      { spanish: "Hablen más alto.", armenian: "Խոսե՛ք ավելի բարձր։" },
      { spanish: "Coman ahora.", armenian: "Հիմա կերե՛ք։" },
      { spanish: "Escriban las respuestas.", armenian: "Գրե՛ք պատասխանները։" }
    ]
  },
  {
    id: 8,
    title: "8. Nosotros ձև — եկեք անենք",
    content: "**Nosotros** ձևը նշանակում է՝ **եկեք անենք** (համատեղ գործողություն):",
    table: {
      headers: ["Infinitivo", "Nosotros ձև"],
      rows: [
        ["hablar", "hablemos"],
        ["comer", "comamos"],
        ["vivir", "vivamos"]
      ]
    },
    examples: [
      { spanish: "Hablemos.", armenian: "Եկեք խոսենք։" },
      { spanish: "Comamos juntos.", armenian: "Եկեք միասին ուտենք։" },
      { spanish: "Escribamos el texto.", armenian: "Եկեք գրենք տեքստը։" },
      { spanish: "Vamos.", armenian: "Գնանք / եկեք գնանք։ (կիրառվում է ir բայի ուղղակի ձևը)" }
    ]
  },
  {
    id: 9,
    title: "9. Vosotros ձև — դուք, Իսպանիա",
    content: "**Vosotros** օգտագործվում է հիմնականում Իսպանիայում՝ ոչ պաշտոնական «դուք» իմաստով (խումբ ընկերներին դիմելիս):\n\n**Հեշտ կանոնը**՝ infinitivo-ի վերջի **-r**-ը ուղղակի փոխում ենք **-d**-ի: Բացառություններ չկան!",
    table: {
      headers: ["Infinitivo", "Vosotros ձև"],
      rows: [
        ["hablar", "hablad"],
        ["comer", "comed"],
        ["vivir", "vivid"]
      ]
    },
    examples: [
      { spanish: "Hablad más despacio.", armenian: "Խոսե՛ք ավելի դանդաղ։" },
      { spanish: "Comed la comida.", armenian: "Կերե՛ք ուտելիքը։" },
      { spanish: "Escribid en el cuaderno.", armenian: "Գրե՛ք տետրում։" }
    ]
  },
  {
    id: 10,
    title: "10. Imperativo negativo — ժխտական հրամայական",
    content: "Ժխտական հրամայականում օգտագործում ենք **no** մասնիկը բայից առաջ.\n\n**no + բայ** (կիրառում է Subjuntivo-ի վերջավորությունները)\n\nՕրինակ՝ **No hables** (Մի՛ խոսիր), **No comas** (Մի՛ կեր), **No escribas** (Մի՛ գրիր):",
    examples: [
      { spanish: "No hables.", armenian: "Մի՛ խոսիր։" },
      { spanish: "No comas.", armenian: "Մի՛ կեր։" },
      { spanish: "No escribas.", armenian: "Մի՛ գրիր։" }
    ]
  },
  {
    id: 11,
    title: "11. Imperativo negativo — կանոնավոր բայեր",
    content: "Ժխտական հրամայականում վերջավորությունները փոխվում են «հակառակ» ձևով:\n\n* **-AR բայերը** ստանում են **-e**-ով վերջավորություններ:\n* **-ER / -IR բայերը** ստանում են **-a**-ով վերջավորություններ:",
    table: {
      headers: ["Անձ", "Hablar (AR -> e)", "Comer (ER -> a)", "Vivir (IR -> a)"],
      rows: [
        ["tú", "no hables", "no comas", "no vivas"],
        ["usted", "no hable", "no coma", "no viva"],
        ["nosotros/as", "no hablemos", "no comamos", "no vivamos"],
        ["vosotros/as", "no habléis", "no comáis", "no viváis"],
        ["ustedes", "no hablen", "no coman", "no vivan"]
      ]
    }
  },
  {
    id: 12,
    title: "12. Դրական և ժխտական ձևերի համեմատություն",
    content: "Տեսեք, թե ինչպես են տարբերվում դրական և ժխտական ձևերը (հիմնականում **tú** և **vosotros** ձևերում է, որ արմատական տարբերություն կա. դրականի tú-ն ստանում է ներկայի Indicativo-ի ձևը, իսկ ժխտականի tú-ն՝ Subjuntivo-ի):",
    table: {
      headers: ["Դրական", "Հայերեն (Դրական)", "Ժխտական", "Հայերեն (Ժխտական)"],
      rows: [
        ["habla", "խոսիր", "no hables", "մի՛ խոսիր"],
        ["come", "կեր", "no comas", "մի՛ կեր"],
        ["vive", "ապրիր", "no vivas", "մի՛ ապրիր"],
        ["escribe", "գրիր", "no escribas", "մի՛ գրիր"],
        ["lee", "կարդա", "no leas", "մի՛ կարդա"]
      ]
    },
    examples: [
      { spanish: "Habla conmigo. / No hables conmigo.", armenian: "Խոսիր ինձ հետ։ / Ինձ հետ մի՛ խոսիր։" },
      { spanish: "Come ahora. / No comas ahora.", armenian: "Հիմա կեր։ / Հիմա մի՛ կեր։" }
    ]
  },
  {
    id: 13,
    title: "13. Արմատափոխվող բայեր Imperativo-ում",
    content: "Որոշ բայեր ունեն արմատի ձայնավորի փոփոխություն (ներկա ժամանակի նման): Այդ փոփոխությունը պահպանվում է նաև հրամայականում (բացի nosotros և vosotros ձևերից, որտեղ արմատը չի փոխվում, բացի որոշ -ir բայերից nosotros-ում):\n\n### **E -> IE**\n* **pensar** → **piensa** / **no pienses** (մտածիր / մի՛ մտածիր)\n* **cerrar** → **cierra** / **no cierres** (փակիր / մի՛ փակիր)\n* **empezar** → **empieza** / **no empieces** (սկսիր / մի՛ սկսիր)\n\n### **E -> I**\n* **pedir** → **pide** / **no pidas** (օգնություն խնդրիր / մի՛ խնդրիր)\n* **repetir** → **repite** / **no repitas** (կրկնիր / մի՛ կրկնիր)\n* **servir** → **sirve** / **no sirvas** (մատուցիր / մի՛ մատուցիր)\n\n### **O -> UE**\n* **dormir** → **duerme** / **no duermas** (քնիր / մի՛ քնիր)\n* **volver** → **vuelve** / **no vuelvas** (վերադարձիր / մի՛ վերադարձիր)\n* **recordar** → **recuerda** / **no recuerdes** (հիշիր / մի՛ հիշիր)\n\n### **U -> UE**\n* **jugar** → **juega** / **no juegues** (խաղա / մի՛ խաղա)\n*(ուշադրություն՝ giocare-ի նման jugar բայի ժխտականում գրվում է **juegues**, ոչ թե juegas):*",
    examples: [
      { spanish: "Piensa bien.", armenian: "Լավ մտածիր։" },
      { spanish: "No pienses mucho.", armenian: "Շատ մի՛ մտածիր։" },
      { spanish: "Pide ayuda.", armenian: "Օգնություն խնդրիր։" },
      { spanish: "No pidas ayuda.", armenian: "Օգնություն մի՛ խնդրիր։" },
      { spanish: "Duerme bien.", armenian: "Լավ քնիր։" },
      { spanish: "No duermas tarde.", armenian: "Ուշ մի՛ քնիր։" },
      { spanish: "Juega conmigo.", armenian: "Խաղա ինձ հետ։" },
      { spanish: "No juegues aquí.", armenian: "Այստեղ մի՛ խաղա։" }
    ]
  },
  {
    id: 14,
    title: "14. Դրական Imperativo-ի անկանոն tú ձևերը",
    content: "Սրանք շատ կարևոր են և պետք է անգիր հիշել: Սրանք ամենահաճախակի օգտագործվող բայերն են, որոնց **դրական tú** ձևը խիստ կարճացված է:",
    table: {
      headers: ["Infinitivo", "Tú դրական", "Հայերեն թարգմանություն"],
      rows: [
        ["decir", "di", "ասա"],
        ["hacer", "haz", "արա"],
        ["ir", "ve", "գնա"],
        ["poner", "pon", "դիր / դիր տեղը"],
        ["salir", "sal", "դուրս արի / դուրս եկ"],
        ["ser", "sé", "եղիր"],
        ["tener", "ten", "ունեցիր / պահիր / վերցրու"],
        ["venir", "ven", "արի"],
        ["oír", "oye", "լսիր"]
      ]
    },
    examples: [
      { spanish: "Di la verdad.", armenian: "Ասա ճշմարտությունը։" },
      { spanish: "Haz la tarea.", armenian: "Արա տնայինը։" },
      { spanish: "Ve a casa.", armenian: "Գնա տուն։" },
      { spanish: "Pon el libro aquí.", armenian: "Դիր գիրքը այստեղ։" },
      { spanish: "Sal de la habitación.", armenian: "Դուրս արի սենյակից։" },
      { spanish: "Sé amable.", armenian: "Եղիր բարի։" },
      { spanish: "Ten cuidado.", armenian: "Զգույշ եղիր։" },
      { spanish: "Ven aquí.", armenian: "Արի այստեղ։" },
      { spanish: "Oye esta canción.", armenian: "Լսիր այս երգը։" }
    ]
  },
  {
    id: 15,
    title: "15. Նույն բայերի ժխտական tú ձևերը",
    content: "Ժխտականում այս բայերը չեն պահպանում իրենց կարճ ձևերը, այլ ստանում են Presente de Subjuntivo-ի ձևերը (հաճախ հիմնված Indicativo-ի **yo** ձևի վրա՝ **dig-**, **hag-**, **veng-** և այլն):",
    table: {
      headers: ["Infinitivo", "Tú դրական", "Tú ժխտական", "Հայերեն (Ժխտական)"],
      rows: [
        ["decir", "di", "no digas", "մի՛ ասա"],
        ["hacer", "haz", "no hagas", "մի՛ արա"],
        ["ir", "ve", "no vayas", "մի՛ գնա"],
        ["poner", "pon", "no pongas", "մի՛ դիր"],
        ["salir", "sal", "no salgas", "մի՛ դուրս արի"],
        ["ser", "sé", "no seas", "մի՛ եղիր"],
        ["tener", "ten", "no tengas", "մի՛ ունեցիր"],
        ["venir", "ven", "no vengas", "մի՛ արի"],
        ["oír", "oye", "no oigas", "մի՛ լսիր"]
      ]
    },
    examples: [
      { spanish: "Di la verdad. / No digas mentiras.", armenian: "Ասա ճշմարտությունը։ / Սուտ մի՛ ասա։" },
      { spanish: "Haz la tarea. / No hagas ruido.", armenian: "Արա տնայինը։ / Աղմուկ մի՛ արա։" },
      { spanish: "Ve allí. / No vayas solo.", armenian: "Գնա այնտեղ։ / Մենակ մի՛ գնա։" },
      { spanish: "Sé tranquilo. / No seas malo.", armenian: "Եղիր հանգիստ։ / Վատը մի՛ եղիր։" }
    ]
  },
  {
    id: 16,
    title: "16. Ամբողջական աղյուսակ՝ անկանոն բայեր",
    content: "Անկանոն բայերի ամբողջական դրական հրամայականի համակարգը բոլոր անձերով:",
    table: {
      headers: ["Բայ", "Tú", "Usted", "Nosotros/as", "Vosotros/as", "Ustedes"],
      rows: [
        ["ser", "sé", "sea", "seamos", "sed", "sean"],
        ["ir", "ve", "vaya", "vayamos", "id", "vayan"],
        ["tener", "ten", "tenga", "tengamos", "tened", "tengan"],
        ["poner", "pon", "ponga", "pongamos", "poned", "pongan"],
        ["salir", "sal", "salga", "salgamos", "salid", "salgan"],
        ["venir", "ven", "venga", "vengamos", "venid", "vengan"],
        ["decir", "di", "diga", "digamos", "decid", "digan"],
        ["hacer", "haz", "haga", "hagamos", "haced", "hagan"],
        ["oír", "oye", "oiga", "oigamos", "oíd", "oigan"]
      ]
    }
  },
  {
    id: 17,
    title: "17. Ամբողջական ժխտական աղյուսակ՝ անկանոն բայեր",
    content: "Անկանոն բայերի ամբողջական ժխտական հրամայականի համակարգը բոլոր անձերով:",
    table: {
      headers: ["Բայ", "Tú", "Usted", "Nosotros/as", "Vosotros/as", "Ustedes"],
      rows: [
        ["ser", "no seas", "no sea", "no seamos", "no seáis", "no sean"],
        ["ir", "no vayas", "no vaya", "no vayamos", "no vayáis", "no vayan"],
        ["tener", "no tengas", "no tenga", "no tengamos", "no tengáis", "no tengan"],
        ["poner", "no pongas", "no ponga", "no pongamos", "no pongáis", "no pongan"],
        ["salir", "no salgas", "no salga", "no salgamos", "no salgáis", "no salgan"],
        ["venir", "no vengas", "no venga", "no vengamos", "no vengáis", "no vengan"],
        ["decir", "no digas", "no diga", "no digamos", "no digáis", "no digan"],
        ["hacer", "no hagas", "no haga", "no hagamos", "no hagáis", "no hagan"],
        ["oír", "no oigas", "no oiga", "no oigamos", "no oigáis", "no oigan"]
      ]
    }
  },
  {
    id: 18,
    title: "18. Yo ձևով անկանոն բայեր",
    content: "Որոշ բայեր ներկա ժամանակի **yo** ձևում ունեն յուրահատուկ անկանոնություն (ուղղագրական կամ արմատական), որը լիովին պահպանվում է ժխտական Imperativo-ում:\n\n* **tener** → tengo → **no tengas**\n* **hacer** → hago → **no hagas**\n* **decir** → digo → **no digas**\n* **venir** → vengo → **no vengas**\n* **conocer** → conozco → **no conozcas**",
    table: {
      headers: ["Infinitivo", "Yo ձև (Indicativo)", "Tú ժխտական (Imperativo)"],
      rows: [
        ["tener", "tengo", "no tengas"],
        ["hacer", "hago", "no hagas"],
        ["decir", "digo", "no digas"],
        ["venir", "vengo", "no vengas"],
        ["caer", "caigo", "no caigas"],
        ["conducir", "conduzco", "no conduzcas"],
        ["conocer", "conozco", "no conozcas"],
        ["poner", "pongo", "no pongas"],
        ["salir", "salgo", "no salgas"]
      ]
    },
    examples: [
      { spanish: "No tengas miedo.", armenian: "Մի՛ վախեցիր։" },
      { spanish: "No hagas eso.", armenian: "Դա մի՛ արա։" },
      { spanish: "No digas nada.", armenian: "Ոչինչ մի՛ ասա։" },
      { spanish: "No vengas tarde.", armenian: "Ուշ մի՛ արի։" },
      { spanish: "No conduzcas rápido.", armenian: "Արագ մի՛ վարիր։" }
    ]
  },
  {
    id: 19,
    title: "19. Դերանունները Imperativo-ում",
    content: "Imperativo-ում դերանունների (անձնական, վերադարձական, ուղիղ և անուղղակի խնդիրների) տեղը շատ կարևոր է:\n\n### 1. Դրական Imperativo-ում դերանունը կպչում է բայի վերջում (Enclisis)\n* Օրինակ՝ **Ayúdame** (Օգնիր ինձ), **Dime** (Ասա ինձ):\n\n### 2. Ժխտական Imperativo-ում դերանունը դրվում է բայից առաջ (Proclisis)\n* Օրինակ՝ **No me ayudes** (Մի՛ օգնիր ինձ), **No me digas** (Ինձ մի՛ ասա):",
    examples: [
      { spanish: "Ayúdame. / No me ayudes.", armenian: "Օգնիր ինձ։ / Մի՛ օգնիր ինձ։" },
      { spanish: "Dime. / No me digas.", armenian: "Ասա ինձ։ / Ինձ մի՛ ասա։" },
      { spanish: "Dámelo. / No me lo des.", armenian: "Տուր դա ինձ։ / Մի՛ տուր դա ինձ։" },
      { spanish: "Cómelo. / No lo comas.", armenian: "Կեր դա։ / Մի՛ կեր դա։" },
      { spanish: "Levántate. / No te levantes.", armenian: "Վեր կաց։ / Վեր մի՛ կաց։" }
    ]
  },
  {
    id: 20,
    title: "20. Երկու դերանուն Imperativo-ում",
    content: "Երբ ունենք երկու դերանուն (օրինակ՝ անուղղակի և ուղիղ խնդիր), նրանց հերթականությունը միշտ հետևյալն է՝ **ում + ինչ** (Indirect + Direct Object Pronoun):\n\n* **me + lo** — ինձ դա\n* **te + la** — քեզ դա\n* **se + lo** — նրան դա\n* **nos + los** — մեզ դրանք\n\n### Դրական (կպչում են բային որպես մեկ բառ. պահանջվում է շեշտադրություն)\n* **Dímelo.** (Ասա դա ինձ:)\n* **Dáselo.** (Տուր դա նրան:)\n* **Cómpramelo.** (Գնիր դա ինձ համար:)\n\n### Ժխտական (գրվում են առանձին բայից առաջ)\n* **No me lo digas.** (Մի՛ ասա դա ինձ:)\n* **No se lo des.** (Մի՛ տուր դա նրան:)\n* **No me lo compres.** (Մի՛ գնիր դա ինձ համար:)"
  },
  {
    id: 21,
    title: "21. Ինչու le / les դառնում է se",
    content: "Երբ անուղղակի խնդիրը (**le / les** - նրան / նրանց) հանդիպում է ուղիղ խնդրի դերանուններին (**lo / la / los / las**), ապա **le / les**-ը հնչյունական պատճառներով դառնում է **se**:\n\nՍխալ է՝ **le lo** ❌, **les la** ❌\nՃիշտ է՝ **se lo** ✅, **se la** ✅, **se los** ✅, **se las** ✅",
    examples: [
      { spanish: "Da el libro a Carlos.", armenian: "Տուր գիրքը Կառլոսին։" },
      { spanish: "Dáselo.", armenian: "Տուր դա նրան։ (da + le + lo -> dáselo)" }
    ]
  },
  {
    id: 22,
    title: "22. Վերադարձական բայերով Imperativo",
    content: "Վերադարձական բայերն ունեն **-se** վերջավորություն (օրինակ՝ levantarse — վեր կենալ): Դրանց խոնարհելիս դրական ձևում **te**, **se**, **nos**, **os** դերանունները կպչում են բային, իսկ ժխտականում՝ գրվում են բայից առաջ:",
    examples: [
      { spanish: "Levántate temprano.", armenian: "Շուտ վեր կաց։" },
      { spanish: "Dúchate ahora.", armenian: "Հիմա ցնցուղ ընդունիր։" },
      { spanish: "Siéntese aquí, por favor.", armenian: "Նստե՛ք այստեղ, խնդրում եմ։" },
      { spanish: "No te levantes tarde.", armenian: "Ուշ վեր մի՛ կաց։" },
      { spanish: "No te duches ahora.", armenian: "Հիմա ցնցուղ մի՛ ընդունիր։" },
      { spanish: "No se siente aquí.", armenian: "Այստեղ մի՛ նստեք։" }
    ],
    table: {
      headers: ["Բայ", "Tú", "Usted", "Ustedes"],
      rows: [
        ["levantarse (Դրական)", "levántate", "levántese", "levántense"],
        ["levantarse (Ժխտական)", "no te levantes", "no se levante", "no se levanten"],
        ["ducharse (Դրական)", "dúchate", "dúchese", "dúchense"],
        ["ducharse (Ժխտական)", "no te duches", "no se duche", "no se duchen"],
        ["sentarse (Դրական)", "siéntate", "siéntese", "siéntense"],
        ["sentarse (Ժխտական)", "no te sientes", "no se siente", "no se sienten"],
        ["acostarse (Դրական)", "acuéstate", "acuéstese", "acuéstense"],
        ["acostarse (Ժխտական)", "no te acuestes", "no se acueste", "no se acuesten"]
      ]
    }
  },
  {
    id: 23,
    title: "23. Nosotros վերադարձական բայերով",
    content: "**Nosotros** ձևով վերադարձական բայերի դեպքում դրական հրամայականում տեղի է ունենում հնչյունական կրճատում. բայի վերջի **-s**-ը սահում-կորչում է **nos**-ի դիմաց.\n\n* **levantemos + nos** -> **levantémonos** (ոչ թե levantemosnos)\n* **sentemos + nos** -> **sentémonos**\n\nԺխտականում նման բան չկա. դերանունը դրվում է անջատ բայից առաջ.\n\n* **No nos levantemos** (Եկեք վեր չկենանք)\n* **No nos sentemos aquí** (Եկեք այստեղ չնստենք)",
    examples: [
      { spanish: "Levantémonos. / No nos levantemos.", armenian: "Եկեք վեր կենանք։ / Եկեք վեր չկենանք։" },
      { spanish: "Sentémonos. / No nos sentemos aquí.", armenian: "Եկեք նստենք։ / Եկեք այստեղ չնստենք։" },
      { spanish: "Preparémonos. / No nos preocupemos.", armenian: "Եկեք պատրաստվենք։ / Եկեք չանհանգստանանք։" }
    ]
  },
  {
    id: 24,
    title: "24. Irse բայի հատուկ ձևը",
    content: "**irse** (գնալ / հեռանալ) բայի ձևերը շատ հատուկ են և լայնորեն կիրառվում են ամենօրյա խոսքում:\n\nԴրական վերադարձական **vosotros** ձևում **ir + os** դառնում է **idos** (սա միակ բայն է, որտեղ vosotros վերադարձականում -d-ն չի կորչում):\n\n* **Vete.** (Գնա / հեռացիր)\n* **Váyase.** (Գնացեք / հեռացեք)\n* **Vámonos.** (Գնանք / եկեք գնանք)\n* **Váyanse.** (Գնացեք)",
    table: {
      headers: ["Անձ", "Դրական", "Ժխտական"],
      rows: [
        ["tú (դու)", "vete", "no te vayas"],
        ["usted (Դուք)", "váyase", "no se vaya"],
        ["nosotros/as (մենք)", "vámonos", "no nos vayamos"],
        ["vosotros/as (դուք)", "idos", "no os vayáis"],
        ["ustedes (դուք)", "váyanse", "no se vayan"]
      ]
    }
  },
  {
    id: 25,
    title: "25. Քաղաքավարի Imperativo",
    content: "Քաղաքավարի խոսքում օգտագործում ենք **usted** / **ustedes** ձևերը, որոնք արտահայտում են խորին հարգանք:",
    examples: [
      { spanish: "Pase, por favor.", armenian: "Անցե՛ք / ներս եկեք, խնդրում եմ։" },
      { spanish: "Espere un momento, por favor.", armenian: "Սպասե՛ք մի պահ, խնդրում եմ։" },
      { spanish: "Escriba su nombre aquí.", armenian: "Գրե՛ք Ձեր անունը այստեղ։" },
      { spanish: "Siéntese aquí, por favor.", armenian: "Նստե՛ք այստեղ, խնդրում եմ։" },
      { spanish: "No se preocupe.", armenian: "Մի՛ անհանգստացեք։" }
    ]
  },
  {
    id: 26,
    title: "26. Օրինակներ ամենօրյա խոսքում",
    content: "Ահա մի քանի շատ տարածված կարճ հրամաններ դասասենյակային և ամենօրյա կյանքից.",
    examples: [
      { spanish: "Escucha.", armenian: "Լսիր։" },
      { spanish: "Repite.", armenian: "Կրկնիր։" },
      { spanish: "Lee el texto.", armenian: "Կարդա տեքստը։" },
      { spanish: "Escribe la respuesta.", armenian: "Գրիր պատասխանը։" },
      { spanish: "Abre el libro.", armenian: "Բացիր գիրքը։" },
      { spanish: "Cierra la puerta.", armenian: "Փակիր դուռը։" },
      { spanish: "Mira aquí.", armenian: "Նայիր այստեղ։" },
      { spanish: "Ven conmigo.", armenian: "Արի ինձ հետ։" },
      { spanish: "No corras.", armenian: "Մի՛ վազիր։" },
      { spanish: "No grites.", armenian: "Մի՛ գոռա։" },
      { spanish: "No tengas miedo.", armenian: "Մի՛ վախեցիր։" }
    ]
  },
  {
    id: 27,
    title: "27. Փոքրիկ դիալոգ Imperativo-ով",
    content: "Կարդացեք և վերլուծեք այս դիալոգը ուսուցչուհու և աշակերտների միջև.",
    additionalNotes: "**Profesora:**\nCarlos, lee el texto, por favor.\n\n**Carlos:**\nSí, profesora.\n\n**Profesora:**\nLucía, escucha y escribe las palabras nuevas.\n\n**Lucía:**\nDe acuerdo.\n\n**Profesora:**\nChicos, no habléis muy alto. Trabajad juntos y preguntad si no entendéis.\n\n**Carlos:**\nProfesora, no entiendo esta palabra.\n\n**Profesora:**\nPregúntame. No tengas miedo.\n\n\n**Թարգմանություն ՝**\n\n**Ուսուցչուհի ՝** Կառլոս, կարդա տեքստը, խնդրում եմ։\n**Կառլոս ՝** Այո, ուսուցչուհի։\n**Ուսուցչուհի ՝** Լուսիա, լսիր և գրիր նոր բառերը։\n**Լուսիա ՝** Լավ։\n**Ուսուցչուհի ՝** Երեխաներ, շատ բարձր մի՛ խոսեք։ Աշխատեք միասին և հարցրեք, եթե չեք հասկանում։\n**Կառլոս ՝** Ուսուցչուհի, ես այս բառը չեմ հասկանում։\n**Ուսուցչուհի ՝** Հարցրու ինձ։ Մի՛ վախեցիր։"
  }
];

export const verbsList: VerbInfo[] = [
  {
    infinitive: "hablar",
    translation: "խոսել",
    type: "regular",
    group: "-ar",
    afirmativo: {
      tú: "habla",
      usted: "hable",
      nosotros: "hablemos",
      vosotros: "hablad",
      ustedes: "hablen"
    },
    negativo: {
      tú: "no hables",
      usted: "no hable",
      nosotros: "no hablemos",
      vosotros: "no habléis",
      ustedes: "no hablen"
    }
  },
  {
    infinitive: "comer",
    translation: "ուտել",
    type: "regular",
    group: "-er",
    afirmativo: {
      tú: "come",
      usted: "coma",
      nosotros: "comamos",
      vosotros: "comed",
      ustedes: "coman"
    },
    negativo: {
      tú: "no comas",
      usted: "no coma",
      nosotros: "no comamos",
      vosotros: "no comáis",
      ustedes: "no coman"
    }
  },
  {
    infinitive: "vivir",
    translation: "ապրել",
    type: "regular",
    group: "-ir",
    afirmativo: {
      tú: "vive",
      usted: "viva",
      nosotros: "vivamos",
      vosotros: "vivid",
      ustedes: "vivan"
    },
    negativo: {
      tú: "no vivas",
      usted: "no viva",
      nosotros: "no vivamos",
      vosotros: "no viváis",
      ustedes: "no vivan"
    }
  },
  {
    infinitive: "ser",
    translation: "եղիր (լինել)",
    type: "irregular",
    group: "-er",
    afirmativo: {
      tú: "sé",
      usted: "sea",
      nosotros: "seamos",
      vosotros: "sed",
      ustedes: "sean"
    },
    negativo: {
      tú: "no seas",
      usted: "no sea",
      nosotros: "no seamos",
      vosotros: "no seáis",
      ustedes: "no sean"
    }
  },
  {
    infinitive: "ir",
    translation: "գնալ",
    type: "irregular",
    group: "-ir",
    afirmativo: {
      tú: "ve",
      usted: "vaya",
      nosotros: "vayamos",
      vosotros: "id",
      ustedes: "vayan"
    },
    negativo: {
      tú: "no vayas",
      usted: "no vaya",
      nosotros: "no vayamos",
      vosotros: "no vayáis",
      ustedes: "no vayan"
    }
  },
  {
    infinitive: "tener",
    translation: "ունենալ",
    type: "irregular",
    group: "-er",
    afirmativo: {
      tú: "ten",
      usted: "tenga",
      nosotros: "tengamos",
      vosotros: "tened",
      ustedes: "tengan"
    },
    negativo: {
      tú: "no tengas",
      usted: "no tenga",
      nosotros: "no tengamos",
      vosotros: "no tengáis",
      ustedes: "no tengan"
    }
  },
  {
    infinitive: "hacer",
    translation: "անել",
    type: "irregular",
    group: "-er",
    afirmativo: {
      tú: "haz",
      usted: "haga",
      nosotros: "hagamos",
      vosotros: "haced",
      ustedes: "hagan"
    },
    negativo: {
      tú: "no hagas",
      usted: "no haga",
      nosotros: "no hagamos",
      vosotros: "no hagáis",
      ustedes: "no hagan"
    }
  },
  {
    infinitive: "decir",
    translation: "ասել",
    type: "irregular",
    group: "-ir",
    afirmativo: {
      tú: "di",
      usted: "diga",
      nosotros: "digamos",
      vosotros: "decid",
      ustedes: "digan"
    },
    negativo: {
      tú: "no digas",
      usted: "no diga",
      nosotros: "no digamos",
      vosotros: "no digáis",
      ustedes: "no digan"
    }
  },
  {
    infinitive: "venir",
    translation: "գալ",
    type: "irregular",
    group: "-ir",
    afirmativo: {
      tú: "ven",
      usted: "venga",
      nosotros: "vengamos",
      vosotros: "venid",
      ustedes: "vengan"
    },
    negativo: {
      tú: "no vengas",
      usted: "no venga",
      nosotros: "no vengamos",
      vosotros: "no vengáis",
      ustedes: "no vengan"
    }
  },
  {
    infinitive: "jugar",
    translation: "խաղալ",
    type: "stem-changing",
    group: "-ar",
    change: "u -> ue",
    afirmativo: {
      tú: "juega",
      usted: "juegue",
      nosotros: "juguemos",
      vosotros: "jugad",
      ustedes: "jueguen"
    },
    negativo: {
      tú: "no juegues",
      usted: "no juegue",
      nosotros: "no juguemos",
      vosotros: "no juguéis",
      ustedes: "no jueguen"
    }
  },
  {
    infinitive: "pensar",
    translation: "մտածել",
    type: "stem-changing",
    group: "-ar",
    change: "e -> ie",
    afirmativo: {
      tú: "piensa",
      usted: "piense",
      nosotros: "pensemos",
      vosotros: "pensad",
      ustedes: "piensen"
    },
    negativo: {
      tú: "no pienses",
      usted: "no piense",
      nosotros: "no pensemos",
      vosotros: "no penséis",
      ustedes: "no piensen"
    }
  },
  {
    infinitive: "pedir",
    translation: "խնդրել",
    type: "stem-changing",
    group: "-ir",
    change: "e -> i",
    afirmativo: {
      tú: "pide",
      usted: "pida",
      nosotros: "pidamos",
      vosotros: "pedid",
      ustedes: "pidan"
    },
    negativo: {
      tú: "no pidas",
      usted: "no pida",
      nosotros: "no pidamos",
      vosotros: "no pidáis",
      ustedes: "no pidan"
    }
  },
  {
    infinitive: "dormir",
    translation: "քնել",
    type: "stem-changing",
    group: "-ir",
    change: "o -> ue",
    afirmativo: {
      tú: "duerme",
      usted: "duerma",
      nosotros: "durmamos",
      vosotros: "dormid",
      ustedes: "duerman"
    },
    negativo: {
      tú: "no duermas",
      usted: "no duerma",
      nosotros: "no durmamos",
      vosotros: "no durmáis",
      ustedes: "no duerman"
    }
  },
  {
    infinitive: "levantarse",
    translation: "վեր կենալ",
    type: "regular", // reflexive
    group: "-ar",
    afirmativo: {
      tú: "levántate",
      usted: "levántese",
      nosotros: "levantémonos",
      vosotros: "levantaos",
      ustedes: "levántense"
    },
    negativo: {
      tú: "no te levantes",
      usted: "no se levante",
      nosotros: "no nos levantemos",
      vosotros: "no os levantéis",
      ustedes: "no se levanten"
    }
  }
];
