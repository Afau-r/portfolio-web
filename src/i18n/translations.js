export const translations = {
  es: {
    meta: {
      title: "Alex Fau | Analytics Engineer & Data Scientist",
      description:
        "Portafolio de Alex Fau: Analytics Engineer y Data Scientist especializado en SQL, Python, PySpark, Databricks, modelos ML y desarrollo full-stack.",
    },
    nav: {
      logo: "Mi Portfolio",
      links: {
        about: "Sobre mí",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
      },
      cvButton: "Descargar CV",
    },
    hero: {
      role: "Analytics Engineer & Data Scientist",
      subtitle:
        "Construyendo pipelines fiables, modelos que predicen y productos que se usan.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contacto",
    },
    about: {
      heading: "Sobre mí",
      bio: [
        "Soy Analytics Engineer y Data Scientist especializado en el ciclo completo del dato: desde la construcción de pipelines y el modelado en Databricks, hasta el desarrollo de modelos predictivos que resuelven retos de negocio reales con SQL, Python y PySpark en entornos cloud de alta demanda.",
        "Me interesa la convergencia entre ingeniería analítica, ciencia de datos e inteligencia artificial — incluyendo el desarrollo de agentes LLM y automatizaciones con MCP — complementada con la creación de productos propios que llevan el dato más allá del informe.",
      ],
      details: {
        location: { label: "Ubicación:", value: "Barcelona, España" },
        education: { label: "Educación:", value: "Máster en Data Analytics & AI" },
        languages: { label: "Idiomas:", value: "Español, Catalán, Inglés" },
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
          title: "Digital Analyst",
          place: "Mango",
          date: "Jun 2025 - Actualidad",
          bullets: [
            "Diseño y despliegue de un framework analítico en Databricks (SQL + PySpark) para estandarizar métricas de disponibilidad online y mejorar la lectura de negocio en ecommerce.",
            "Construcción de pipelines automatizados desde Azure Databricks hasta Power BI, garantizando trazabilidad end-to-end, calidad del dato y disponibilidad para los equipos de negocio.",
            "Desarrollo de un modelo de atribución data-driven multicanal para apoyar decisiones comerciales y de marketing.",
            "Definición de métricas reutilizables y lógica de reporting escalable para asegurar consistencia en los análisis recurrentes.",
          ],
        },
        {
          title: "Audit Junior",
          place: "Ernst & Young (EY)",
          date: "Nov 2023 - Ago 2024",
          bullets: [
            "Procesé y analicé grandes volúmenes de datos financieros de empresas multinacionales para apoyar validaciones y controles de auditoría.",
            "Desarrollé scripts para automatizar tareas repetitivas de datos, reduciendo el tiempo de procesamiento manual.",
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
            "App de fitness full-stack con seguimiento de entrenamientos, métricas corporales, fotos de progreso y coaching personalizado por IA.",
          detailedDescription:
            "Aplicación completa construida con React 19 (Vite) en el frontend y FastAPI (Python) en el backend, con Supabase como capa de autenticación, base de datos y almacenamiento de fotos. El motor de coaching calcula targets de RPE personalizados, e1RM y clasifica el rendimiento según la fase del usuario (volumen/definición/recomposición). Las rutinas soportan drag-and-drop para reordenamiento, las sesiones persisten entre recargas y la app está desplegada en Vercel con soporte iOS/Android via Capacitor.",
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
        1: {
          title: "Predicción inmobiliaria (Dubái)",
          description:
            "Análisis con Python para detectar zonas de alta rentabilidad utilizando regresión y visualización de métricas específicas.",
          detailedDescription:
            "Este proyecto implicó la recolección de datos de listados inmobiliarios en Dubái, limpieza exhaustiva, y el entrenamiento de un modelo de regresión para predecir precios y rentabilidad. Se utilizaron técnicas de visualización para mapear las 'zonas calientes' para inversión.",
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
        4: {
          title: "Dashboard de bienestar",
          description:
            "Visualización con Tableau para monitorear la salud organizacional con KPIs de recursos humanos y satisfacción laboral.",
          detailedDescription:
            "Creación de un dashboard interactivo en Tableau que integra múltiples fuentes de datos para visualizar KPIs relacionados con la satisfacción de los empleados, rotación y clima laboral, permitiendo la toma de decisiones informadas por parte de RRHH.",
          downloadLabel: "Dashboard",
        },
        5: {
          title: "Detección Fuga de Empleados",
          description:
            "Construcción de un modelo Random Forest para identificar empleados con alto riesgo de renunciar.",
          detailedDescription:
            "Este proyecto se centró en el desarrollo de un modelo predictivo para la retención de talento. Se utilizaron datos históricos para entrenar un clasificador Random Forest capaz de identificar patrones asociados con la fuga de empleados, permitiendo a RRHH intervenir proactivamente.",
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
      heading: "Habilidades técnicas",
      categories: {
        analyticsEngineering: "Ingeniería Analítica",
        visualizationBI: "Visualización & BI",
        machineLearning: "Machine Learning",
        aiDevelopment: "IA & Desarrollo",
      },
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
        skills: "Habilidades",
        contact: "Contacto",
      },
    },
  },
  en: {
    meta: {
      title: "Alex Fau | Analytics Engineer & Data Scientist",
      description:
        "Portfolio of Alex Fau: Analytics Engineer and Data Scientist specialized in SQL, Python, PySpark, Databricks, ML models, and full-stack development.",
    },
    nav: {
      logo: "My Portfolio",
      links: {
        about: "About Me",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
      },
      cvButton: "Download CV",
    },
    hero: {
      role: "Analytics Engineer & Data Scientist",
      subtitle:
        "Building reliable pipelines, models that predict, and products that people use.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact",
    },
    about: {
      heading: "About Me",
      bio: [
        "I'm an Analytics Engineer and Data Scientist specialized in the full data lifecycle: from building pipelines and modeling in Databricks, to developing predictive models that solve real business challenges with SQL, Python, and PySpark in high-demand cloud environments.",
        "I'm interested in the convergence of analytics engineering, data science, and artificial intelligence — including LLM agent development and MCP-based automation — complemented by building my own products that take data beyond the report.",
      ],
      details: {
        location: { label: "Location:", value: "Barcelona, Spain" },
        education: { label: "Education:", value: "Master's in Data Analytics & AI" },
        languages: { label: "Languages:", value: "Spanish, Catalan, English" },
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
          title: "Digital Analyst",
          place: "Mango",
          date: "Jun 2025 - Present",
          bullets: [
            "Designed and deployed an analytical framework in Databricks (SQL + PySpark) to standardize online availability metrics and improve business insight in ecommerce.",
            "Built automated pipelines from Azure Databricks to Power BI, ensuring end-to-end traceability, data quality, and availability for business teams.",
            "Developed a data-driven multichannel attribution model to support commercial and marketing decisions.",
            "Defined reusable metrics and scalable reporting logic to ensure consistency across recurring analyses.",
          ],
        },
        {
          title: "Audit Junior",
          place: "Ernst & Young (EY)",
          date: "Nov 2023 - Aug 2024",
          bullets: [
            "Processed and analyzed large volumes of financial data from multinational companies to support audit validation and controls.",
            "Built scripts to automate repetitive data tasks, reducing manual processing time.",
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
            "Full-stack fitness app with workout tracking, body metrics, progress photos, and personalized AI coaching.",
          detailedDescription:
            "Complete application built with React 19 (Vite) on the frontend and FastAPI (Python) on the backend, with Supabase as the authentication, database, and photo storage layer. The coaching engine calculates personalized RPE targets, e1RM, and classifies performance based on the user's phase (volume/cut/recomposition). Routines support drag-and-drop reordering, sessions persist across reloads, and the app is deployed on Vercel with iOS/Android support via Capacitor.",
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
        1: {
          title: "Real Estate Prediction (Dubai)",
          description:
            "Python analysis to detect high-profitability zones using regression and visualization of specific metrics.",
          detailedDescription:
            "This project involved collecting real estate listing data in Dubai, thorough data cleaning, and training a regression model to predict prices and profitability. Visualization techniques were used to map 'hot zones' for investment.",
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
        4: {
          title: "Wellbeing Dashboard",
          description:
            "Tableau visualization to monitor organizational health with HR KPIs and job satisfaction.",
          detailedDescription:
            "Creation of an interactive Tableau dashboard integrating multiple data sources to visualize KPIs related to employee satisfaction, turnover, and work climate, enabling informed decision-making by HR.",
          downloadLabel: "Dashboard",
        },
        5: {
          title: "Employee Churn Detection",
          description:
            "Built a Random Forest model to identify employees at high risk of resigning.",
          detailedDescription:
            "This project focused on developing a predictive model for talent retention. Historical data was used to train a Random Forest classifier capable of identifying patterns associated with employee churn, allowing HR to intervene proactively.",
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
      heading: "Technical Skills",
      categories: {
        analyticsEngineering: "Analytics Engineering",
        visualizationBI: "Visualization & BI",
        machineLearning: "Machine Learning",
        aiDevelopment: "AI & Development",
      },
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
        skills: "Skills",
        contact: "Contact",
      },
    },
  },
};
