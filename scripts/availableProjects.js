export const getProjectsPreview = () => {
    const projectsNames = Object.keys(availableProjects);
    const getRandomIndex = () => Math.floor(Math.random() * projectsNames.length);

    const projectsPreview = [];

    while (projectsPreview.length < 3) {
        const randomProject = projectsNames[getRandomIndex()];
        const pickedProject = availableProjects[randomProject];
        
        if (!projectsPreview.includes(pickedProject)) {    
            projectsPreview.push(pickedProject);
        }        
    }

    return projectsPreview;
};

export const availableProjects = {
    simplify: {
        title: 'Simplify',
        completedDate: 'June 22, 2021',
        backgroundImage: '1.jpg',
        area: 'UI Design & App Development',
        description: [
            `Eum repudiandae culpa perferendis saepe nihil consectetur sapiente, porro ducimus ipsum dolorum, debitis amet magni accusantium quod exercitationem alias expedita sit earum!
            Vitae iusto cupiditate earum dolorem itaque distinctio animi sequi error, perferendis nemo at adipisci odio beatae, reprehenderit ad. Porro molestiae assumenda dolor quas alias voluptatem quo harum accusamus quibusdam tempora!
            Dolorem voluptatum laudantium nostrum natus magnam, animi enim eligendi odio iusto, in doloribus rerum maiores illum cum dolores? Nam perspiciatis est veritatis rerum saepe laborum quo ipsam odio ad sed.`,

            `Neque soluta provident pariatur possimus praesentium, minus dolorem, ad deserunt tempora aliquam blanditiis cumque laudantium eaque omnis. Fugit officia delectus optio voluptates.
            Odio, quibusdam obcaecati ratione, pariatur minus vero modi voluptates necessitatibus ex itaque ab inventore illum perspiciatis assumenda? Magnam, pariatur? Ipsam incidunt a possimus repellat perspiciatis ipsum sapiente id, sit natus.
            Pariatur, quae temporibus vel magnam ipsam repellendus ut molestias hic fuga! Fugit ad cum accusamus exercitationem et eaque ducimus error in! Placeat doloribus harum amet quia illum repudiandae, culpa accusamus.`
        ]
    },
    dashcoin: {
        title: 'Dashcoin',
        completedDate: 'December 2, 2020',
        backgroundImage: '2.jpg',
        area: 'Web Development',
        description: [
            `Obcaecati qui excepturi expedita voluptates corrupti facilis ex, ullam quibusdam. In hic perspiciatis inventore exercitationem voluptate maxime officia, totam dignissimos ratione sapiente!
            Quam harum asperiores exercitationem adipisci dolor illum, facilis corrupti eaque enim ab doloribus dignissimos! Cupiditate, distinctio praesentium rem perferendis dicta nesciunt sint velit obcaecati placeat ea ut tempora eveniet suscipit?`,
            
            `Nihil tenetur blanditiis maxime necessitatibus nesciunt debitis quas eum repellat quasi natus delectus maiores excepturi ratione voluptatibus distinctio, fugiat perspiciatis magnam nemo.
            Nihil a natus odit ratione earum hic accusantium esse. Eos odit assumenda perspiciatis. Suscipit rem id fugiat reiciendis voluptatum! Maiores fugit cupiditate rerum earum ipsa dignissimos incidunt inventore quo sequi!
            Modi nesciunt illo dignissimos, eaque, eligendi corporis aperiam accusamus ducimus necessitatibus, tempore facilis optio cumque fuga quo earum praesentium maxime! Dicta sint iste eaque necessitatibus perspiciatis magni quidem officia cumque?
            Iure, similique? Corporis ipsa cum qui dicta nobis unde ex. Quam, nesciunt? Consequuntur qui assumenda nesciunt harum sed culpa, laboriosam ipsum nisi velit necessitatibus sapiente blanditiis molestias praesentium impedit fuga?
            Nostrum quibusdam maxime at, nemo aperiam saepe voluptatum ipsa cupiditate quia, fugit consectetur quae impedit! Soluta porro, earum neque molestiae laborum culpa nemo, autem atque qui impedit rerum, dolores quod.`
        ]
    },
    vectorify: {
        title: 'Vectorify',
        completedDate: 'August 7, 2021',
        backgroundImage: '3.jpg',
        area: 'User Experience Design',
        description: [
            `Blanditiis architecto soluta odit itaque eaque, aliquam numquam, libero a praesentium fugit explicabo iste ipsam inventore rem beatae quod, non illum nam.
            Reiciendis velit reprehenderit libero culpa voluptatibus sint nulla, repellat non numquam repellendus nihil quo. Unde ex praesentium rem officiis? Quo cum soluta autem ducimus modi ad aperiam et nam reiciendis?
            Fuga, in soluta minima blanditiis eius corporis totam voluptate, fugit iusto dolore quisquam veniam alias ad, reiciendis eum. Ipsa nobis voluptas explicabo iste voluptatem perferendis tempora dolorem enim, voluptates labore.`,
            
            `Ex, qui. Sapiente facilis tenetur eaque harum in. Laborum dignissimos quod illum nobis in molestias eum magnam atque, amet, consequatur minus quae.
            Saepe doloribus assumenda consequatur officiis velit ipsum facere officia voluptate eos ullam iste dolore, provident error perspiciatis totam repudiandae voluptates ut. Alias nesciunt fuga iure ducimus odit est tenetur repellendus?`
        ]
    },
    orbit: {
        title: 'Orbit',
        completedDate: 'March 4, 2019',
        backgroundImage: '4.jpg',
        area: 'UI Design',
        description: [
            `Reiciendis velit reprehenderit libero culpa voluptatibus sint nulla, repellat non numquam repellendus nihil quo. Unde ex praesentium rem officiis? Quo cum soluta autem ducimus modi ad aperiam et nam reiciendis?
            Fuga, in soluta minima blanditiis eius corporis totam voluptate, fugit iusto dolore quisquam veniam alias ad, reiciendis eum. Ipsa nobis voluptas explicabo iste voluptatem perferendis tempora dolorem enim, voluptates labore.`,
            
            `Ex, qui. Sapiente facilis tenetur eaque harum in. Laborum dignissimos quod illum nobis in molestias eum magnam atque, amet, consequatur minus quae.
            Saepe doloribus assumenda consequatur officiis velit ipsum facere officia voluptate eos ullam iste dolore, provident error perspiciatis totam repudiandae voluptates ut. Alias nesciunt fuga iure ducimus odit est tenetur repellendus?
            Blanditiis architecto soluta odit itaque eaque, aliquam numquam, libero a praesentium fugit explicabo iste ipsam inventore rem beatae quod, non illum nam.
            `
        ]
    },
    purify: {
        title: 'Purify',
        completedDate: 'July 2, 2020',
        backgroundImage: '5.jpg',
        area: 'UI/UX Design',
        description: [
            `Modi nesciunt illo dignissimos, eaque, eligendi corporis aperiam accusamus ducimus necessitatibus, tempore facilis optio cumque fuga quo earum praesentium maxime! Dicta sint iste eaque necessitatibus perspiciatis magni quidem officia cumque?
            Iure, similique? Corporis ipsa cum qui dicta nobis unde ex. Quam, nesciunt? Consequuntur qui assumenda nesciunt harum sed culpa, laboriosam ipsum nisi velit necessitatibus sapiente blanditiis molestias praesentium impedit fuga?
            Nostrum quibusdam maxime at, nemo aperiam saepe voluptatum ipsa cupiditate quia, fugit consectetur quae impedit!`,
            
            `Nihil tenetur blanditiis maxime necessitatibus nesciunt debitis quas eum repellat quasi natus delectus maiores excepturi ratione voluptatibus distinctio, fugiat perspiciatis magnam nemo.
            Nihil a natus odit ratione earum hic accusantium esse. Eos odit assumenda perspiciatis. Suscipit rem id fugiat reiciendis voluptatum! Maiores fugit cupiditate rerum earum ipsa dignissimos incidunt inventore quo sequi!
             Soluta porro, earum neque molestiae laborum culpa nemo, autem atque qui impedit rerum, dolores quod.  Obcaecati qui excepturi expedita voluptates corrupti facilis ex, ullam quibusdam. In hic perspiciatis inventore exercitationem voluptate maxime officia, totam dignissimos ratione sapiente!
             Quam harum asperiores exercitationem adipisci dolor illum, facilis corrupti eaque enim ab doloribus dignissimos! Cupiditate, distinctio praesentium rem perferendis dicta nesciunt sint velit obcaecati placeat ea ut tempora eveniet suscipit?`
        ]
    },
    cryptoPie: {
        title: 'CryptoPie',
        completedDate: 'August 9, 2022',
        backgroundImage: '6.jpg',
        area: 'App Development',
        description: [
            `Pariatur, quae temporibus vel magnam ipsam repellendus ut molestias hic fuga! Fugit ad cum accusamus exercitationem et eaque ducimus error in! Placeat doloribus harum amet quia illum repudiandae, culpa accusamus.
            Vitae iusto cupiditate earum dolorem itaque distinctio animi sequi error, perferendis nemo at adipisci odio beatae, reprehenderit ad. Porro molestiae assumenda dolor quas alias voluptatem quo harum accusamus quibusdam tempora!
            Dolorem voluptatum laudantium nostrum natus magnam, animi enim eligendi odio iusto, in doloribus rerum maiores illum cum dolores? Nam perspiciatis est veritatis rerum saepe laborum quo ipsam odio ad sed.`,

            `Eum repudiandae culpa perferendis saepe nihil consectetur sapiente, porro ducimus ipsum dolorum, debitis amet magni accusantium quod exercitationem alias expedita sit earum!
            Neque soluta provident pariatur possimus praesentium, minus dolorem, ad deserunt tempora aliquam blanditiis cumque laudantium eaque omnis. Fugit officia delectus optio voluptates.
            Odio, quibusdam obcaecati ratione, pariatur minus vero modi voluptates necessitatibus ex itaque ab inventore illum perspiciatis assumenda? Magnam, pariatur? Ipsam incidunt a possimus repellat perspiciatis ipsum sapiente id, sit natus.`
        ]
    }
};

