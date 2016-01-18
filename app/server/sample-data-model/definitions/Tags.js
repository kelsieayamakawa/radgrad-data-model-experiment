defineTags = function() {

  let sampleTags = [
    {
      name: "Software Engineering",
      slug: "software-engineering",
      description: "The systematic application of scientific and technological knowledge, methods, and experience to the design, implementation, testing, and documentation of software",
      tagType: "cs-disciplines"
    },
    {
      name: "Psychology",
      slug: "psychology",
      description: "The scientific study of the human mind and its functions, especially those affecting behavior in a given context",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Silicon Valley",
      slug: "silicon-valley",
      description: "the southern portion of the San Francisco Bay Area, centering on the Santa Clara valley.",
      tagType: "locations"
    },
    {
      name: "Data Scientist",
      slug: "data-scientist",
      description: "Combine statistics, data mining, and predictive analytics to gain insight from large data sets.",
      tagType: "professional-goals"
    },
    {
      name: "Web Developer",
      slug: "web-developer",
      description: "A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications, or distributed network applications that are run over HTTP form a web server to a web browser.",
      tagType: "professional-goals"
    },
    {
      name: "Network Security",
      slug: "network-security",
      description: "Network Security is the process of taking physical and software preventative measures to protect the underlying networking infrastructure from unauthorized access, misuse, malfunction, modification, destruction, or improper disclosure, thereby creating a secure platform for computers, users and programs to perform their permitted critical functions within a secure environment.",
      tagType: "cs-disciplines"
    },
    {
      name: "Software Architect",
      slug: "software-architect",
      description: "A software architect is a software expert who makes high-level design choices and dictates technical standards, including software coding standards, tools, and platforms.",
      tagType: "professional-goals"
    },
    {
      name: "Data Architect",
      slug: "data-architect",
      description: "A data architect is a practitioner of data architecture, an information technology discipline concerned with designing, creating, deploying and managing an organization's data architecture.",
      tagType: "professional-goals"
    }
  ];

  _.each(sampleTags, RadGrad.tag.define);
};