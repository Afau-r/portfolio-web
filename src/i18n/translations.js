export const translations = {
  es: {
    meta: {
      title: "Alex Fau | Data Engineer",
      description:
        "Portafolio de Alex Fau: Data Engineer especializado en entornos Cloud, Databricks y Power BI, con foco en arquitecturas de datos gobernadas y aplicación de IA al dato.",
    },
    nav: {
      logo: "Alex Fau",
      links: {
        about: "Sobre mí",
        projects: "Proyectos",
        skills: "Stack",
        services: "Servicios",
        contact: "Contacto",
      },
      cvButton: "Descargar CV",
    },
    hero: {
      role: "Data Engineer",
      subtitle:
        "Diseño arquitecturas de datos en Azure y Microsoft Fabric, y construyo pipelines que convierten datos en decisiones de negocio.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contacto",
    },
    about: {
      heading: "Sobre mí",
      bio: [
        "Soy Data Engineer especializado en entornos Cloud, con experiencia end-to-end en el ciclo del dato: ingesta, modelado dimensional bajo arquitectura Medallion, orquestación con Databricks, PySpark y SQL, y exposición en Power BI. Actualmente construyo la capa Back-End de BI de Moventia, un grupo de movilidad que opera en cinco países.",
        "Me atraen los retos y los proyectos innovadores que cumplen un cometido real, no los que se quedan en la teoría. Por eso combino mi trabajo en Moventia con automatizaciones basadas en agentes LLM, RAG y MCP, mentorías a perfiles junior y productos propios que llevan el dato más allá del informe.",
      ],
      details: {
        location: { label: "Ubicación:", value: "Barcelona, España" },
        education: { label: "Educación:", value: "Máster en Data Analytics & IA" },
        languages: { label: "Idiomas:", value: "Español, Catalán, Inglés" },
        interests: { label: "Intereses:", value: "IA aplicada al dato, automatización, mentoría" },
      },
      educationHeading: "Educación",
      experienceHeading: "Experiencia",
      education: [
        {
          title: "Máster en Data Analytics & IA",
          place: "ISDI Escuela Digital",
          date: "2024 - 2025",
          description:
            "Especialización en ciencia de datos y algoritmos de Machine Learning aplicados a negocio.",
        },
        {
          title: "Grado en Economía",
          place: "Universidad Autónoma de Barcelona",
          date: "2019 - 2023",
          description: "Enfoque en estadística, modelos econométricos y económicos.",
        },
      ],
      experience: [
        {
          title: "Data Engineer",
          place: "Moventia",
          date: "Sept 2026 - Actualidad",
          bullets: [
            "Incorporación al equipo de Business Intelligence de Moventia (Movento y Moventis) como perfil Back-End, con el objetivo de extender a Cataluña y Madrid el control de KPIs implementado en Arabia Saudí, migrando desde Board hacia el ecosistema Microsoft Fabric / Power BI.",
            "Diseño de arquitecturas de datos bajo el enfoque Medallion (Bronze, Silver, Gold) y modelado dimensional en esquema estrella (hechos, dimensiones, SCD) sobre datos de kilometraje, conductores, talleres, calidad, planificación y logística, replicando la base técnica ya validada en Arabia Saudí.",
            "Construcción de pipelines en Microsoft Fabric (Data Factory, Notebooks PySpark, Lakehouse, Warehouse) sobre OneLake, con control de versiones en Git/GitHub y despliegues vía CI/CD.",
            "Colaboración con negocio y BI para orientar el modelo de datos al consumo analítico, dando soporte a Power BI e integrando capacidades de IA (Azure OpenAI, Copilot in Fabric, RAG) cuando aportan valor real.",
          ],
        },
        {
          title: "Analytics Engineer",
          place: "Mango",
          date: "Jun 2025 - Ago 2026",
          bullets: [
            "Diseño y despliegue en Databricks (SQL + PySpark) de un sistema de disponibilidad online sobre tablas de millones de filas, sustituyendo el stock estático por un KPI de disponibilidad percibida por el cliente desarrollado para el equipo de logística, que mejoró la precisión de la métrica en ~5pp.",
            "Desarrollo de un pipeline de atribución multicanal data-driven (Markov chains, First/Last Touch, Linear, Time Decay) sobre tablas de millones de filas, auditado y validado por Deloitte, que mejoró la asignación de ingresos en un 2-3% respecto al modelo last-click.",
            "Colaboración con el equipo de Data Engineering: conozco el flujo end-to-end, desde los datos de navegación de GA4 exportados a BigQuery, hasta su ingesta al datalake, modelado en dbt (versionado en Git), orquestación con Airflow y la capa agregada en Snowflake que alimenta los dashboards de Looker.",
          ],
        },
        {
          title: "Data Analyst",
          place: "Ernst & Young (EY)",
          date: "Nov 2023 - Ago 2024",
          bullets: [
            "Extracción, limpieza y transformación de datos de clientes multinacionales (SQL, Power Query) y modelado de tablas de hechos/dimensiones para su consumo en Power BI.",
            "Construcción y mantenimiento de dashboards y KPIs en Power BI (DAX), con reconciliaciones y controles de calidad para garantizar que las cifras coincidieran con las fuentes.",
          ],
        },
      ],
    },
    projects: {
      heading: "Proyectos destacados",
      detailFallback: "Próximamente más detalles sobre este proyecto.",
      downloadFallback: "Descargar",
      codeLabel: "Código",
      demoLabel: "Demo",
      items: {
        0: {
          badge: "Full-Stack App",
          title: "GainzTracker",
          description:
            "App de fitness full-stack con backend propio, base de datos relacional y reports de progreso, además de seguimiento de entrenamientos y coaching personalizado por IA.",
          detailedDescription:
            "Aplicación completa construida con React 19 (Vite) en el frontend y FastAPI (Python) en el backend, con Supabase (PostgreSQL) como base de datos, autenticación y almacenamiento. Diseñé el modelado de datos, la lógica de servidor y los reports de progreso que consumen los usuarios (métricas corporales, fotos, rendimiento). El motor de coaching calcula targets de RPE personalizados y e1RM a partir del histórico almacenado, clasificando el rendimiento según la fase del usuario (volumen/definición/recomposición). La app corre en producción en Vercel con servidor propio, con soporte iOS/Android via Capacitor.",
        },
        1: {
          badge: "Data Pipeline · dbt",
          title: "Plataforma de Datos E-commerce (Brasil)",
          description:
            "Pipeline de datos end-to-end (Python + DuckDB + dbt) sobre el dataset público Olist, con modelado dimensional, tests de calidad y documentación completa.",
          detailedDescription:
            "Diseño y construcción de un pipeline de datos completo sobre el dataset público de e-commerce brasileño Olist: ingesta en Python, transformación y modelado dimensional en dbt sobre DuckDB, tests de calidad de datos automatizados y documentación del proyecto pensada para ser replicable en un contexto real de cliente. Es el proyecto público que mejor representa mi forma de trabajar en Data Engineering de extremo a extremo, sin las restricciones de confidencialidad de los proyectos internos de Mango.",
        },
        7: {
          badge: "Interno · Databricks",
          title: "Framework de Disponibilidad Online (Mango)",
          description:
            "Framework analítico en Databricks (SQL + PySpark) que estandariza la medición de disponibilidad online, sustituyendo una métrica de stock estática por una lectura centrada en la disponibilidad percibida por el cliente, a nivel de toda la compañía.",
          detailedDescription:
            "Diseño y despliegue de un framework de referencia para medir disponibilidad online en ecommerce, unificando criterios entre equipos de negocio. El framework reemplaza indicadores estáticos de stock por una métrica dinámica orientada a la experiencia real del cliente, con pipelines desde Databricks hasta herramientas de reporting para su consumo por distintas áreas. Por tratarse de un desarrollo interno y confidencial de Mango, no se publican notebooks, nombres de tablas ni detalles de la lógica de negocio.",
        },
        8: {
          badge: "Interno · Marketing Analytics",
          title: "Modelo de Atribución Multicanal (Mango)",
          description:
            "Modelo de atribución data-driven multicanal (First Touch, Last Touch, Linear, Time Decay y cadenas de Markov con efecto de eliminación) construido sobre la capa de datos de Databricks para apoyar decisiones comerciales y de marketing.",
          detailedDescription:
            "Desarrollo de un modelo de atribución multicanal que compara distintas metodologías — First Touch, Last Touch, Linear, Time Decay y cadenas de Markov con cálculo de removal effect — para repartir el crédito de conversión entre canales de marketing de forma más rigurosa que las reglas de atribución tradicionales. El modelo se apoya en la capa de datos ya consolidada en Databricks y alimenta la toma de decisiones comerciales y de inversión en medios. Al ser un desarrollo interno de Mango, no se comparten notebooks ni nombres de tablas internas.",
        },
        2: {
          title: "Forecasting de demanda (Cruzber)",
          description:
            "Optimizar la planificación de la demanda y la gestión del inventario de Cruzber, utilizando datos históricos y modelos predictivos.",
          detailedDescription:
            "Desarrollo de un pipeline completo para el forecasting de demanda. Esto incluyó el análisis de series temporales, la selección y entrenamiento de modelos como MLForecast y LGMRegressor. El objetivo principal fue optimizar los niveles de inventario y la disponibilidad del producto obteniendo una reducción importante en los costes de inmovilizado.",
          downloadLabel: "Ver Tesis",
        },
        3: {
          title: "Clustering e-commerce",
          description:
            "K-Means para segmentar clientes y personalizar estrategias de marketing a partir del seguimiento estratégico RFM.",
          detailedDescription:
            "Aplicación del algoritmo K-Means para la segmentación de clientes basada en su comportamiento de compra (RFM: Recencia, Frecuencia, Monetario). Se visualizaron los clusters resultantes y se propusieron estrategias de marketing personalizadas para cada segmento, con el fin de aumentar la retención y el valor del cliente.",
        },
        6: {
          title: "Consultas a una Base de Datos (TechZone)",
          description:
            "Estudio estratégico para TechZone, identificando segmentos de clientes de alto valor ('Tech Enthusiasts') mediante análisis de CLV y CAC.",
          detailedDescription:
            "Se realizó un análisis profundo basado en datos de compra para segmentar a los clientes. Utilizando consultas SQL en BigQuery, se identificaron patrones de compra y se calculó el CLV y CAC para proponer recomendaciones estratégicas de marketing.",
          downloadLabel: "Ver Análisis",
        },
      },
    },
    skills: {
      heading: "Stack técnico",
      categories: {
        cloudPlatforms: "Microsoft Fabric & Azure",
        dataEngineering: "Ingeniería de Datos",
        governance: "Gobernanza & DevOps",
        visualizationBI: "BI & Reporting",
        appliedAI: "IA aplicada al dato",
        machineLearning: "Data Science & Forecasting",
      },
    },
    services: {
      heading: "Servicios",
      intro:
        "Además de mi rol en Moventia, colaboro puntualmente en proyectos externos de datos, formación e IA aplicada.",
      items: [
        {
          title: "Consultoría freelance de datos",
          description:
            "Diseño de arquitecturas de datos, pipelines ETL/ELT y modelado dimensional para proyectos puntuales, desde la ingesta hasta la capa de consumo analítico en BI.",
        },
        {
          title: "Mentoría y formación",
          description:
            "Acompañamiento a perfiles junior en SQL, Python, PySpark y Power BI, y sesiones de formación práctica orientadas a proyectos reales.",
        },
        {
          title: "IA aplicada, prompting y automatización",
          description:
            "Agentes LLM, automatizaciones con MCP y desarrollo de herramientas a medida que conectan datos, IA y producto.",
        },
      ],
      cta: "Contacto",
    },
    contact: {
      heading: "Contacto",
      intro: "¿Tienes un proyecto interesante o quieres hablar sobre oportunidades de colaboración? Conectemos!",
      form: {
        nameLabel: "Nombre",
        emailLabel: "Email",
        subjectLabel: "Asunto",
        messageLabel: "Mensaje",
        submitButton: "Enviar mensaje",
      },
      mailto: {
        messageFrom: "Mensaje de:",
        contactEmail: "Email de contacto:",
      },
    },
    footer: {
      builtWith: "Desarrollado con",
      createdWith: "Creado con Visual Studio Code",
      navLinks: {
        about: "Sobre mí",
        projects: "Proyectos",
        skills: "Stack",
        services: "Servicios",
        contact: "Contacto",
      },
    },
  },
  en: {
    meta: {
      title: "Alex Fau | Data Engineer",
      description:
        "Portfolio of Alex Fau: Data Engineer specialized in Cloud environments, Databricks and Power BI, focused on governed data architectures and applied AI.",
    },
    nav: {
      logo: "Alex Fau",
      links: {
        about: "About Me",
        projects: "Projects",
        skills: "Stack",
        services: "Services",
        contact: "Contact",
      },
      cvButton: "Download CV",
    },
    hero: {
      role: "Data Engineer",
      subtitle:
        "Designing data architectures on Azure and Microsoft Fabric, and building pipelines that turn data into business decisions.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact",
    },
    about: {
      heading: "About Me",
      bio: [
        "I'm a Data Engineer specialized in Cloud environments, with end-to-end experience across the data lifecycle: ingestion, dimensional modeling under the Medallion architecture, orchestration with Databricks, PySpark and SQL, and exposure in Power BI. I'm currently building the BI Back-End layer at Moventia, a mobility group operating across five countries.",
        "I'm drawn to challenges and innovative projects that actually accomplish something, not ones that stay theoretical. That's why I pair my work at Moventia with automation built on LLM agents, RAG and MCP, mentoring junior profiles, and building my own products that take data beyond the report.",
      ],
      details: {
        location: { label: "Location:", value: "Barcelona, Spain" },
        education: { label: "Education:", value: "Master's in Data Analytics & AI" },
        languages: { label: "Languages:", value: "Spanish, Catalan, English" },
        interests: { label: "Interests:", value: "Applied AI, automation, mentoring" },
      },
      educationHeading: "Education",
      experienceHeading: "Experience",
      education: [
        {
          title: "Master's in Data Analytics & AI",
          place: "ISDI Digital Business School",
          date: "2024 - 2025",
          description:
            "Specialization in data science and Machine Learning algorithms applied to business.",
        },
        {
          title: "Bachelor's Degree in Economics",
          place: "Autonomous University of Barcelona",
          date: "2019 - 2023",
          description: "Focus on statistics, econometric and economic modeling.",
        },
      ],
      experience: [
        {
          title: "Data Engineer",
          place: "Moventia",
          date: "Sept 2026 - Present",
          bullets: [
            "Joined Moventia's Business Intelligence team (Movento and Moventis) as the Back-End profile, tasked with extending to Catalonia and Madrid the KPI control system implemented in Saudi Arabia, migrating from Board to the Microsoft Fabric / Power BI ecosystem.",
            "Designing data architectures under the Medallion approach (Bronze, Silver, Gold) and dimensional star-schema modeling (facts, dimensions, SCD) over mileage, driver, workshop, quality, planning and logistics data, replicating the technical foundation already proven in Saudi Arabia.",
            "Building pipelines in Microsoft Fabric (Data Factory, PySpark Notebooks, Lakehouse, Warehouse) on top of OneLake, with version control in Git/GitHub and CI/CD deployments.",
            "Collaborating with business and BI teams to keep the data model oriented to analytical consumption, supporting Power BI and integrating AI capabilities (Azure OpenAI, Copilot in Fabric, RAG) when they add real value.",
          ],
        },
        {
          title: "Analytics Engineer",
          place: "Mango",
          date: "Jun 2025 - Aug 2026",
          bullets: [
            "Designed and deployed on Databricks (SQL + PySpark) an online availability system across tables with millions of rows, replacing static stock with a customer-perceived availability KPI built for the logistics team, improving metric accuracy by ~5pp.",
            "Developed a data-driven multichannel attribution pipeline (Markov chains, First/Last Touch, Linear, Time Decay) across tables with millions of rows, audited and validated by Deloitte, improving revenue allocation accuracy by 2-3% versus the last-click model.",
            "Collaborated with the Data Engineering team: I know the end-to-end flow, from GA4 browsing data exported to BigQuery, through ingestion into the datalake, dbt modeling (versioned in Git), Airflow orchestration, and the aggregated layer in Snowflake feeding Looker dashboards.",
          ],
        },
        {
          title: "Data Analyst",
          place: "Ernst & Young (EY)",
          date: "Nov 2023 - Aug 2024",
          bullets: [
            "Extracted, cleaned, and transformed data for multinational clients (SQL, Power Query) and modeled fact/dimension tables for consumption in Power BI.",
            "Built and maintained Power BI dashboards and KPIs (DAX), running reconciliations and quality checks to ensure figures matched source data.",
          ],
        },
      ],
    },
    projects: {
      heading: "Featured Projects",
      detailFallback: "More details about this project coming soon.",
      downloadFallback: "Download",
      codeLabel: "Code",
      demoLabel: "Demo",
      items: {
        0: {
          badge: "Full-Stack App",
          title: "GainzTracker",
          description:
            "Full-stack fitness app with a custom backend, relational database, and progress reports, on top of workout tracking and personalized AI coaching.",
          detailedDescription:
            "Complete application built with React 19 (Vite) on the frontend and FastAPI (Python) on the backend, with Supabase (PostgreSQL) as the database, authentication, and storage layer. I designed the data model, server-side logic, and the progress reports users rely on (body metrics, photos, performance). The coaching engine calculates personalized RPE targets and e1RM from stored history, classifying performance based on the user's phase (volume/cut/recomposition). The app runs in production on Vercel with its own backend server, plus iOS/Android support via Capacitor.",
        },
        1: {
          badge: "Data Pipeline · dbt",
          title: "E-commerce Data Platform (Brazil)",
          description:
            "End-to-end data pipeline (Python + DuckDB + dbt) on the public Olist dataset, with dimensional modeling, quality tests, and full documentation.",
          detailedDescription:
            "Designed and built a complete data pipeline on the public Brazilian e-commerce dataset Olist: Python-based ingestion, dimensional modeling and transformation in dbt on top of DuckDB, automated data quality tests, and documentation built to be replicable in a real client context. This is the public project that best represents how I work in end-to-end Data Engineering, without the confidentiality constraints of the internal Mango projects.",
        },
        7: {
          badge: "Internal · Databricks",
          title: "Online Availability Framework (Mango)",
          description:
            "Analytical framework built in Databricks (SQL + PySpark) that standardizes how online product availability is measured, replacing a static stock metric with a customer-perceived availability measure across the whole company.",
          detailedDescription:
            "Designed and deployed a company-wide reference framework for measuring ecommerce online availability, aligning definitions across business teams. The framework replaces static stock-based indicators with a dynamic metric centered on the customer's real experience, with pipelines feeding from Databricks into reporting tools used by multiple teams. As this is confidential internal Mango work, no notebooks, table names, or proprietary business logic are published.",
        },
        8: {
          badge: "Internal · Marketing Analytics",
          title: "Multichannel Attribution Model (Mango)",
          description:
            "Data-driven multichannel attribution model (First Touch, Last Touch, Linear, Time Decay, and Markov chains with removal effect) built on top of the Databricks data layer to support commercial and marketing decisions.",
          detailedDescription:
            "Built a multichannel attribution model comparing several methodologies — First Touch, Last Touch, Linear, Time Decay, and Markov chains with removal-effect calculation — to allocate conversion credit across marketing channels more rigorously than traditional rule-based attribution. The model runs on top of the data layer already consolidated in Databricks and feeds commercial and media-investment decisions. As confidential internal Mango work, no notebooks or internal table names are shared.",
        },
        2: {
          title: "Demand Forecasting (Cruzber)",
          description:
            "Optimize demand planning and inventory management at Cruzber using historical data and predictive models.",
          detailedDescription:
            "Development of a complete demand forecasting pipeline. This included time-series analysis, and the selection and training of models such as MLForecast and LGMRegressor. The main goal was to optimize inventory levels and product availability, achieving a significant reduction in immobilized stock costs.",
          downloadLabel: "View Thesis",
        },
        3: {
          title: "E-commerce Clustering",
          description:
            "K-Means to segment customers and personalize marketing strategies based on strategic RFM tracking.",
          detailedDescription:
            "Application of the K-Means algorithm for customer segmentation based on purchasing behavior (RFM: Recency, Frequency, Monetary). The resulting clusters were visualized and personalized marketing strategies were proposed for each segment, aiming to increase retention and customer value.",
        },
        6: {
          title: "Database Queries (TechZone)",
          description:
            "Strategic study for TechZone, identifying high-value customer segments ('Tech Enthusiasts') through CLV and CAC analysis.",
          detailedDescription:
            "An in-depth analysis based on purchase data was carried out to segment customers. Using SQL queries in BigQuery, purchasing patterns were identified and CLV and CAC were calculated to propose strategic marketing recommendations.",
          downloadLabel: "View Analysis",
        },
      },
    },
    skills: {
      heading: "Technical Stack",
      categories: {
        cloudPlatforms: "Microsoft Fabric & Azure",
        dataEngineering: "Data Engineering",
        governance: "Governance & DevOps",
        visualizationBI: "BI & Reporting",
        appliedAI: "Applied AI",
        machineLearning: "Data Science & Forecasting",
      },
    },
    services: {
      heading: "Services",
      intro:
        "Alongside my role at Moventia, I take on select external projects in data, training and applied AI.",
      items: [
        {
          title: "Freelance data consulting",
          description:
            "Data architecture design, ETL/ELT pipelines and dimensional modeling for standalone projects, from ingestion through to the BI consumption layer.",
        },
        {
          title: "Mentoring & training",
          description:
            "Mentoring junior profiles in SQL, Python, PySpark and Power BI, plus hands-on training sessions built around real projects.",
        },
        {
          title: "Applied AI, prompting & automation",
          description:
            "LLM agents, MCP-based automation, and custom tooling that connects data, AI and product.",
        },
      ],
      cta: "Contact",
    },
    contact: {
      heading: "Contact",
      intro: "Have an interesting project or want to talk about collaboration opportunities? Let's connect!",
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        subjectLabel: "Subject",
        messageLabel: "Message",
        submitButton: "Send message",
      },
      mailto: {
        messageFrom: "Message from:",
        contactEmail: "Contact email:",
      },
    },
    footer: {
      builtWith: "Built with",
      createdWith: "Made with Visual Studio Code",
      navLinks: {
        about: "About Me",
        projects: "Projects",
        skills: "Stack",
        services: "Services",
        contact: "Contact",
      },
    },
  },
};
