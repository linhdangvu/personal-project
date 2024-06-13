export const btnData = [
    { title: "Tous", id: 1, value: "tous" },
    { title: "RDV en attente", id: 2, value: "wait" },
    { title: "RDV confirmés", id: 3, value: "confime" },
    { title: "RDV passés", id: 4, value: "pass" },
    { title: "Crénaux disponibles", id: 5, value: "dispo" },
  ]


  export const exampleData = [
    {
        date: 'Mecredi 09/08',
        meeting: [
         {
                time: "14:15 - 15:00",
                dure: "45 min",
                type: 'wait',
                client: "MME. JANE DOE",
                description: "Signature des docs",
                motif: "Premier rdv",
                subject: "Divorce",moment: 'morning'
            },   {
                time: "14:15 - 15:00",
                dure: "45 min",
                type: 'dispo',
                client: "MME. JANE DOE",
                description: "Signature des docs",
                motif: "Premier rdv",
                subject: "Divorce", moment: 'evening'
            },
        ]
    },
    {
        date: 'Jeudi 10/08',
        meeting: [
            {
                time: "14:15 - 15:00",
                dure: "45 min",
                type: 'pass',
                client: "MME. JANE DOE",
                description: "Signature des docs",
                motif: "Suivi de dossier",
                subject: "Divorce",
                moment: 'morning'
               
            },   {
                time: "14:15 - 15:00",
                dure: "45 min",
                type: 'confime',
                client: "MME. JANE DOE",
                description: "Signature des docs",
                motif: "Premier rdv",
                subject: "Divorce",moment: 'evening'
            },  
        ]
    },
    {
        date: 'Venderdi 11/08',
        meeting: [
            {
                time: "14:15 - 15:00",
                dure: "45 min",
                type: 'pass',
                client: "MME. JANE DOE",
                description: "Signature des docs",
                motif: "Suivi de dossier",
                subject: "Divorce",
                moment: 'morning'
               
            },  {
                time: "14:15 - 15:00",
                dure: "45 min",
                type: 'wait',
                client: "MME. JANE DOE",
                description: "Signature des docs",
                motif: "Premier rdv",
                subject: "Divorce",moment: 'morning'
            },  {
                time: "14:15 - 15:00",
                dure: "45 min",
                type: 'confime',
                client: "MME. JANE DOE",
                description: "Signature des docs",
                motif: "Premier rdv",
                subject: "Divorce",moment: 'evening'
            },   {
                time: "14:15 - 15:00",
                dure: "45 min",
                type: 'dispo',
                client: "MME. JANE DOE",
                description: "Signature des docs",
                motif: "Premier rdv",
                subject: "Divorce", moment: 'evening'
            },
        ]
    }
 
  ]

  export  const avocatData = [
    {
      id: 1,
      fonction: "Fonction de l'avocat",
      name: "Paris France",
      addresse: "Address de l'avocat",
      avartar: "",
      verified: true,
    },
    {
      id: 2,
      fonction: "Fonction de l'avocat",
      name: "JBean Boe",
      addresse: "Address de l'avocat",
      avartar: "",
      verified: false,
    },
    {
      id: 3,
      fonction: "Fonction de l'avocat",
      name: "Dean Doe",
      addresse: "Address de l'avocat",
      avartar: "",
      verified: true,
    },
  ];