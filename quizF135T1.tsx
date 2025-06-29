import { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, ArrowRight, ArrowLeft, Eye, EyeOff, ThumbsUp, ThumbsDown } from 'lucide-react';

const Quiz = () => {
  const questions = [
  {
    "question": "Quelle est la principale source du droit en assurance au Québec selon le chapitre 1?",
    "answer": "Le Code civil du Québec (C.c.Q.)",
    "page": 5
  },
  {
    "question": "Quels sont les trois éléments requis pour établir une responsabilité extracontractuelle selon l'article 1457 C.c.Q.?",
    "answer": "Faute, préjudice, lien causal",
    "page": 17
  },
  {
    "question": "Quelle entité indemnise les dommages corporels sans égard à la faute en cas d'accident automobile?",
    "answer": "La Société de l'assurance automobile du Québec (SAAQ)",
    "page": 30
  },
  {
    "question": "Quel est le montant minimal obligatoire de l'assurance responsabilité automobile selon l'article 87 LAA?",
    "answer": "50 000 $",
    "page": 32
  },
  {
    "question": "Quelle loi québécoise régit la protection des renseignements personnels dans le secteur privé?",
    "answer": "Loi sur la protection des renseignements personnels dans le secteur privé (LPRPSP)",
    "page": 24
  },
  {
    "question": "Quelle est la durée générale de la prescription extinctive pour les droits personnels/mobiliers selon l'art. 2925 C.c.Q.?",
    "answer": "3 ans",
    "page": 22
  },
  {
    "question": "Quels sont les deux types de copropriété définis dans le C.c.Q.?",
    "answer": "Copropriété divise (condominiums) et indivise",
    "page": 11
  },
  {
    "question": "Quelle est la différence fondamentale entre conjoints mariés et conjoints de fait au Québec?",
    "answer": "Les conjoints de fait n'ont aucun droit découlant des règles du partage du patrimoine familial ou de la dissolution du régime matrimonial",
    "page": 8
  },
  {
    "question": "Quel organisme est créé par la Loi sur l'encadrement du secteur financier?",
    "answer": "L'Autorité des marchés financiers (AMF)",
    "page": 28
  },
  {
    "question": "Qu'est-ce qu'un mandat en cas d'inaptitude selon l'art. 2131 C.c.Q.?",
    "answer": "Mandat donné pour assurer la protection de la personne et l'administration des biens en prévision de l'inaptitude du mandant",
    "page": 20
  },
  {
    "question": "Quelles sont les trois exceptions permettant de recueillir des renseignements personnels auprès d'un tiers selon la LPRPSP?",
    "answer": "1) Autorisation légale 2) Intérêt de la personne 3) Vérification d'exactitude",
    "page": 26
  },
  {
    "question": "Quelle loi fédérale s'applique aux transferts de données personnelles hors Québec?",
    "answer": "Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE)",
    "page": 40
  },
  {
    "question": "Quelle est la conséquence juridique de l'absence d'intérêt d'assurance selon le C.c.Q.?",
    "answer": "Nullité absolue du contrat",
    "page": 2
  },
  {
    "question": "Qui est responsable des dommages causés par un enfant mineur selon les principes de responsabilité civile?",
    "answer": "Les parents",
    "page": 48
  },
  {
    "question": "Quelle est la caractéristique principale d'un contrat aléatoire selon le C.c.Q.?",
    "answer": "L'étendue des obligations est incertaine au moment de la conclusion",
    "page": 15
  },
  {
    "question": "Quel mécanisme permet à un assuré de réclamer à son propre assureur même si un tiers est responsable?",
    "answer": "Convention d'indemnisation directe (CID)",
    "page": 36
  },
  {
    "question": "Quels sont les trois éléments constitutifs d'un contrat d'assurance selon l'art. 2389 C.c.Q.?",
    "answer": "Risque, prime, prestation",
    "page": 1
  },
  {
    "question": "Quelle instance judiciaire représente la plus haute autorité en jurisprudence au Canada?",
    "answer": "Cour suprême du Canada",
    "page": 41
  },
  {
    "question": "Quelle est la différence entre responsabilité contractuelle et extracontractuelle?",
    "answer": "Contractuelle : liée à l'exécution d'un contrat. Extracontractuelle : sans lien contractuel",
    "page": 16
  },
  {
    "question": "Quel délai de prescription s'applique à une atteinte à la réputation?",
    "answer": "1 an",
    "page": 22
  },
  {
    "question": "Quelle loi fédérale régit les messages électroniques commerciaux?",
    "answer": "Loi canadienne anti-pourriel",
    "page": 40
  },
  {
    "question": "Quels sont les pouvoirs du Groupement des assureurs automobiles (GAA)?",
    "answer": "Établir la CID, créer des centres d'estimation, gérer le Fichier central des sinistres automobiles","page": 35-37},
    {
    "question": "Quelle est la définition légale d'une automobile selon la LAA?",
    "answer": "Tout véhicule mû par un autre pouvoir que la force musculaire et adapté au transport sur les chemins publics",
    "page": 31
  },
  {
    "question": "Quels sont les trois régimes spéciaux de responsabilité mentionnés dans le C.c.Q.?",
    "answer": "Fait d'autrui, fait des biens, responsabilité du fait des animaux/immeubles",
    "page": 16
  },
  {
    "question": "Quelle protection offre la Liste nationale des numéros de télécommunication exclus (LNNTE)?",
    "answer": "Permet aux consommateurs de ne pas recevoir d'appels de télémarketing non sollicités",
    "page": 40
  },
  {
    "question": "Quelle est la différence entre succession légale et testamentaire?",
    "answer": "Légale : sans testament. Testamentaire : avec testament",
    "page": 9
  },
  {
    "question": "Quels sont les quatre moyens de défense en responsabilité civile?",
    "answer": "Force majeure, bonne foi, acceptation des risques, clauses de non-responsabilité",
    "page": 16
  },
  {
    "question": "Quelle loi encadre les documents électroniques au Québec?",
    "answer": "Loi concernant le cadre juridique des technologies de l'information (LCCJTI)",
    "page": 37
  },
  {
    "question": "Quelle est la définition d'un 'bien meuble' selon le C.c.Q.?",
    "answer": "Chose qui peut être transportée",
    "page": 10
  },
  {
    "question": "Quels sont les trois types de contrats d'assurance terrestre définis dans le C.c.Q.?",
    "answer": "Assurance de personnes, assurance de biens, assurance de responsabilité civile",
    "page": 20
  },
  {
    "question": "Quelle est la règle d'interprétation contra proferentem dans les contrats d'adhésion?",
    "answer": "En cas de doute, interprétation en faveur de l'adhérent",
    "page": 3
  },
  {
    "question": "Quelles sont les obligations du mandataire envers le mandant?",
    "answer": "Agir avec prudence, diligence, honnêteté et loyauté dans l'intérêt du mandant",
    "page": 18
  },
  {
    "question": "Quelle loi régit les représentants en assurance et les experts en sinistres?",
    "answer": "Loi sur la distribution de produits et services financiers (LDPSF)",
    "page": 29
  },
  {
    "question": "Quelle est la présomption concernant le propriétaire d'un véhicule en cas d'accident selon la LAA?",
    "answer": "Présumé responsable du dommage matériel causé par son véhicule",
    "page": 34
  },
  {
    "question": "Quelles sont les conditions pour qu'un risque soit assurable?",
    "answer": "Événement incertain, futur, indépendant de la volonté des parties",
    "page": 1
  },
  {
    "question": "Quelle est la particularité du contrat d'assurance automobile concernant le renouvellement?",
    "answer": "Renouvelé de plein droit sauf avis contraire 30 jours avant échéance",
    "page": 33
  },
  {
    "question": "Quelle est la différence entre personne physique et personne morale?",
    "answer": "Personne morale : entité juridique distincte avec existence perpétuelle",
    "page": 7
  },
  {
    "question": "Quels sont les droits d'accès d'une personne concernant ses renseignements personnels selon la LPRPSP?",
    "answer": "Droit de consultation, rectification et copie",
    "page": 27
  },
  {
    "question": "Quelle est la responsabilité du conducteur en cas d'accident selon l'art. 109 LAA?",
    "answer": "Solidairement responsable avec le propriétaire",
    "page": 34
  },
  {
    "question": "Quels sont les trois domaines sectoriels importants pour les professionnels de l'assurance?",
    "answer": "Environnement, construction, droit municipal",
    "page": 38
  },
  {
    "question": "Quelle est la définition d'un 'renseignement personnel' selon la LPRPSP?",
    "answer": "Tout renseignement concernant une personne physique qui permet de l'identifier",
    "page": 24
  },
  {
    "question": "Quelle est la règle concernant les clauses externes dans les contrats d'adhésion?",
    "answer": "Doivent être portées à connaissance lors de la formation",
    "page": 2
  },
  {
    "question": "Quels sont les effets d'une mise en demeure sur la prescription extinctive?",
    "answer": "N'interrompt pas la prescription",
    "page": 22
  },
  {
    "question": "Quelle est la compétence provinciale en assurance selon la Constitution?",
    "answer": "Contenu des contrats d'assurance",
    "page": 4
  },
  {
    "question": "Quel est le rôle principal de la doctrine en droit?",
    "answer": "Fournir analyses et commentaires de juristes",
    "page": 41
  },
  {
    "question": "Quelle loi encadre la responsabilité professionnelle?",
    "answer": "Lois constitutives des professions et codes de déontologie",
    "page": 39
  },
  {
    "question": "Quels sont les deux régimes distincts créés par la Loi sur l'assurance automobile?",
    "answer": "Dommages corporels (sans égard à la faute) et dommages matériels (basés sur la faute)",
    "page": 30
  },
  {
    "question": "Quelle est la définition du 'patrimoine' selon le C.c.Q.?",
    "answer": "Ensemble des biens et obligations d'une personne appréciables en argent",
    "page": 7
  },
  {
    "question": "Quelle est la conséquence pour une entreprise qui ne répond pas à une demande d'accès aux renseignements personnels dans les 30 jours?",
    "answer": "Réputée avoir refusé la demande",
    "page": 27
  },
  {
    "question": "Quels sont les éléments clés du contrat de mandat?",
    "answer": "Mandant, mandataire, pouvoir de représentation",
    "page": 18
  },
  {
    "question": "Quelle est la particularité de la prescription en matière de dommages corporels?",
    "answer": "Délais inférieurs à 3 ans inapplicables",
    "page": 22
  },
    {
      "question": "Quels sont les trois éléments constitutifs du contrat d'assurance selon l'article 2389 C.c.Q.?",
      "answer": "Le risque, la prime et la prestation.",
      "page": 59
    },
    {
      "question": "Quelle caractéristique doit avoir un risque pour être assurable?",
      "answer": "Il doit être incertain, possible, futur et indépendant de la volonté des parties.",
      "page": 59
    },
    {
      "question": "Qui est considéré comme 'représentant' selon l'article 1 de la LDPSF?",
      "answer": "Le représentant en assurance, l'expert en sinistre et le planificateur financier.",
      "page": 61
    },
    {
      "question": "Quelle différence existe-t-il entre un agent et un courtier en assurance de dommages?",
      "answer": "Le courtier offre des produits de plusieurs assureurs, tandis que l'agent n'offre que les produits d'un seul assureur.",
      "page": 61
    },
    {
      "question": "Pourquoi l'intérêt d'assurance est-il essentiel à la validité du contrat?",
      "answer": "Pour éviter l'enrichissement sans cause et la spéculation sur les biens.",
      "page": 64
    },
    {
      "question": "Quelles sont les deux catégories d'assurance de dommages selon l'article 2396 C.c.Q.?",
      "answer": "L'assurance de biens et l'assurance de responsabilité.",
      "page": 60
    },
    {
      "question": "Quel article du C.c.Q. définit le contrat d'assurance de dommages?",
      "answer": "L'article 2395 C.c.Q.",
      "page": 60
    },
    {
      "question": "Quelle est la conséquence juridique d'un contrat d'assurance sans intérêt d'assurance?",
      "answer": "Nullité absolue du contrat.",
      "page": 64
    },
    {
      "question": "Quelles sont les quatre caractéristiques principales du contrat d'assurance?",
      "answer": "Contrat de la plus haute bonne foi, indemnitaire, bilatéral/synallagmatique, aléatoire.",
      "page": 66
    },
    {
      "question": "Quelle obligation spécifique implique le caractère indemnitaire en assurance de dommages?",
      "answer": "L'assureur s'engage à réparer le préjudice subi sans permettre à l'assuré de s'enrichir.",
      "page": 66
    },
    {
      "question": "Quelles sont les quatre conditions de validité d'un contrat selon l'article 1385 C.c.Q.?",
      "answer": "Consentement, capacité, objet et cause.",
      "page": 67
    },
    {
      "question": "Quelle différence existe-t-il entre consentement exprès et tacite?",
      "answer": "Le consentement exprès est clairement manifesté, tandis que le tacite est déduit du comportement.",
      "page": 67
    },
    {
      "question": "Un mineur de 14 ans peut-il souscrire un contrat d'assurance pour son entreprise?",
      "answer": "Oui, car c'est un acte relatif à son emploi (art. 156 C.c.Q.).",
      "page": 69
    },
    {
      "question": "Quand un objet de contrat est-il considéré comme illicite?",
      "answer": "Lorsqu'il est prohibé par la loi ou contraire à l'ordre public.",
      "page": 69
    },
    {
      "question": "Qu'est-ce qu'une 'clause abusive' dans un contrat d'adhésion?",
      "answer": "Une clause qui désavantage excessivement l'adhérent, contraire à la bonne foi.",
      "page": 73
    },
    {
      "question": "Quelle règle d'interprétation s'applique en priorité selon l'article 1425 C.c.Q.?",
      "answer": "La recherche de l'intention commune des parties.",
      "page": 75
    },
    {
      "question": "Quel est l'effet de la règle 'contra proferentem' dans un contrat d'assurance?",
      "answer": "Le contrat s'interprète contre l'assureur (rédacteur) en cas de doute.",
      "page": 75
    },
    {
      "question": "Quels sont les trois éléments nécessaires pour établir une responsabilité civile?",
      "answer": "Faute, préjudice, lien causal entre la faute et le préjudice.",
      "page": 77
    },
    {
      "question": "Quelle différence existe entre responsabilité contractuelle et extracontractuelle?",
      "answer": "La responsabilité contractuelle suppose un lien contractuel entre les parties, contrairement à l'extracontractuelle.",
      "page": 76
    },
    {
      "question": "Quel article du C.c.Q. prévoit la responsabilité du commettant pour son préposé?",
      "answer": "L'article 1463 C.c.Q.",
      "page": 83
    },
    {
      "question": "Qu'est-ce qu'une présomption de responsabilité?",
      "answer": "Un régime où le défendeur ne peut s'exonérer en prouvant l'absence de faute personnelle.",
      "page": 91
    },
    {
      "question": "Quelles conditions doivent être réunies pour invoquer la force majeure?",
      "answer": "Événement imprévisible et irrésistible.",
      "page": 92
    },
    {
      "question": "Quelle protection offre l'article 1471 C.c.Q. au 'bon Samaritain'?",
      "answer": "Exonération de responsabilité sauf en cas de faute intentionnelle ou lourde.",
      "page": 92
    },
    {
      "question": "Quand une clause de non-responsabilité est-elle nulle?",
      "answer": "Lorsqu'elle vise à exclure la responsabilité pour préjudice corporel/moral ou pour faute intentionnelle/lourde.",
      "page": 94
    },
    {
      "question": "Quel est le délai de prescription pour un recours en responsabilité civile?",
      "answer": "3 ans (art. 2925 C.c.Q.).",
      "page": 100
    },
    {
      "question": "Qu'est-ce que l'IARD en assurance?",
      "answer": "Incendie, Accident et Risques Divers (autre nom pour l'assurance de dommages).",
      "page": 60
    },
    {
      "question": "Qui est le 'preneur' dans un contrat d'assurance?",
      "answer": "La personne qui contracte l'assurance, paie les primes et est titulaire du contrat.",
      "page": 61
    },
    {
      "question": "Quand un risque est-il considéré comme 'dépendant'?",
      "answer": "Lors qu'il peut être réalisé par la seule volonté de l'assuré (ex: acte intentionnel).",
      "page": 63
    },
    {
      "question": "Quel principe limite le montant de l'indemnité en assurance de dommages?",
      "answer": "Le principe indemnitaire (pas d'enrichissement de l'assuré).",
      "page": 64
    },
    {
      "question": "Quelle obligation découle de la 'plus haute bonne foi' pour le preneur?",
      "answer": "Déclarer tous les éléments pertinents pour l'appréciation du risque.",
      "page": 65
    },
    {
      "question": "Qu'est-ce qu'un contrat 'consensuel'?",
      "answer": "Un contrat formé par le seul accord des parties, sans formalisme particulier.",
      "page": 66
    },
    {
      "question": "Quand un majeur sous régime de protection peut-il souscrire une assurance?",
      "answer": "Avec le consentement de son tuteur, curateur ou conseiller.",
      "page": 68
    },
    {
      "question": "Qu'est-ce que la 'lésion' comme vice de consentement?",
      "answer": "Une disproportion importante entre les prestations causée par l'exploitation d'une partie.",
      "page": 68
    },
    {
      "question": "Quel est l'objet du contrat en assurance?",
      "answer": "Pour l'assureur: verser une indemnité en cas de réalisation du risque couvert.",
      "page": 69
    },
    {
      "question": "Qu'est-ce que la 'cause' du contrat pour l'assureur?",
      "answer": "La prime versée par le preneur.",
      "page": 70
    },
    {
      "question": "Quand une clause 'externe' est-elle valide?",
      "answer": "Si elle est expressément portée à la connaissance de l'adhérent lors de la formation du contrat.",
      "page": 73
    },
    {
      "question": "Quand un juge doit-il interpréter un contrat?",
      "answer": "Uniquement en cas d'ambiguïté réelle après examen initial.",
      "page": 74
    },
    {
      "question": "Quelle théorie d'interprétation est rejetée par les tribunaux québécois?",
      "answer": "La théorie de l'attente raisonnable de l'assuré.",
      "page": 76
    },
    {
      "question": "Quels dommages sont couverts par l'article 1611 C.c.Q.?",
      "answer": "La perte subie et le gain dont le créancier est privé (principe de réparation intégrale).",
      "page": 78
    },
    {
      "question": "Qu'est-ce qu'un préjudice corporel?",
      "answer": "Atteinte à l'intégrité physique (blessures, maladies).",
      "page": 79
    },
    {
      "question": "Quel critère détermine le montant des dommages punitifs?",
      "answer": "Le montant suffisant pour assurer leur fonction préventive (art. 1621 C.c.Q.).",
      "page": 80
    },
    {
      "question": "Quelle présomption s'applique au titulaire de l'autorité parentale?",
      "answer": "Présomption de faute pour les dommages causés par l'enfant mineur.",
      "page": 81
    },
    {
      "question": "Quand un gardien d'enfant est-il responsable selon l'article 1460 C.c.Q.?",
      "answer": "S'il agit gratuitement: seulement en cas de preuve de sa faute. Sinon: présomption de faute.",
      "page": 82
    },
    {
      "question": "Quelle faute engage la responsabilité du gardien d'un majeur non doué de raison?",
      "answer": "Faute lourde ou intentionnelle (art. 1461 C.c.Q.).",
      "page": 83
    },
    {
      "question": "Qu'est-ce que le 'fait autonome' d'un bien?",
      "answer": "Un préjudice causé sans intervention humaine (ex: objet qui tombe).",
      "page": 84
    },
    {
      "question": "Quelle responsabilité engage l'article 1466 C.c.Q.?",
      "answer": "Responsabilité du propriétaire d'un animal pour les préjudices causés par celui-ci.",
      "page": 85
    },
    {
      "question": "Qu'est-ce que la 'garantie légale' selon la Loi sur la protection du consommateur?",
      "answer": "L'obligation que le bien soit utilisable pendant une durée raisonnable (art. 38 LPC).",
      "page": 87
    },
    {
      "question": "Qui peut invoquer la responsabilité pour défaut de sécurité d'un produit?",
      "answer": "Toute personne autre que l'acheteur (régime extracontractuel).",
      "page": 88
    },
    {
      "question": "Quel est le fardeau de preuve en matière civile?",
      "answer": "Balance des probabilités (preuve rendant le fait plus probable que son inexistence).",
      "page": 90
    },
    {
      "question": "Qu'est-ce qu'une présomption de faute?",
      "answer": "Un renversement du fardeau de preuve: le défendeur doit prouver son absence de faute.",
      "page": 90
    },
    {
      "question": "Quel moyen de défense offre l'article 1472 C.c.Q.?",
      "answer": "Exonération pour divulgation de secret commercial dans l'intérêt général.",
      "page": 93
    },
    {
      "question": "Quelle condition rend un avis de non-responsabilité valable pour les dommages matériels?",
      "answer": "Preuve que la victime en avait connaissance au moment de la formation du contrat.",
      "page": 94
    },
    {
      "question": "Quelles conditions caractérisent l'acceptation des risques?",
      "answer": "1) Existence d'un risque clair 2) Connaissance du risque 3) Acceptation explicite ou implicite.",
      "page": 95
    },
    {
      "question": "Quel article prévoit le partage de responsabilité?",
      "answer": "L'article 1478 C.c.Q.",
      "page": 96
    },
    {
      "question": "Qu'est-ce que la prescription extinctive?",
      "answer": "Libération d'une obligation par l'écoulement du délai légal sans action en justice.",
      "page": 98
    },
    {
      "question": "Comment calcule-t-on le point de départ de la prescription?",
      "answer": "À compter du jour où le droit d'action naît (ou du jour où le préjudice se manifeste).",
      "page": 100
    },
    {
      "question": "Quel délai s'applique à une action en diffamation?",
      "answer": "1 an (art. 2929 C.c.Q.).",
      "page": 101
    },
    {
      "question": "Quelle règle protège les victimes de préjudice corporel concernant la prescription?",
      "answer": "Interdiction des délais inférieurs à 3 ans ou des avis préalables (art. 2930 C.c.Q.).",
      "page": 102
    },
    {
      "question": "Qui est 'l'adhérent' dans un contrat d'assurance collectif?",
      "answer": "La personne assurée dans le cadre d'un contrat collectif (ex: assurance groupe).",
      "page": 64
    },
    {
      "question": "Quel est l'effet d'un avenant hypothécaire?",
      "answer": "Protège le créancier hypothécaire contre certains moyens de défense de l'assureur.",
      "page": 62
    },
    {
      "question": "Quelle condition rend un risque non-assurable?",
      "answer": "S'il est déjà réalisé (ex: assurer un bien déjà incendié).",
      "page": 63
    },
    {
      "question": "Quelle est la définition légale de l'usufruitier?",
      "answer": "Personne qui a le droit d'user et de jouir d'un bien dont un autre est propriétaire (art. 121 C.c.Q.).",
      "page": 64
    },
    {
      "question": "Quel article impose à l'assureur le devoir d'informer?",
      "answer": "L'article 2403 C.c.Q. (conditions non écrites inopposables).",
      "page": 73
    },
    {
      "question": "Qu'est-ce qu'une clause 'illisible'?",
      "answer": "Clause que ne peut lire une personne raisonnable en raison de sa présentation matérielle.",
      "page": 73
    },
    {
      "question": "Quelle règle s'applique à l'interprétation des clauses contractuelles?",
      "answer": "Elles s'interprètent les unes par rapport aux autres (règle de globalité - art. 1427 C.c.Q.).",
      "page": 75
    },
    {
      "question": "Quel est le délai d'indemnisation pour l'assureur selon l'art. 2473 C.c.Q.?",
      "answer": "60 jours après le sinistre.",
      "page": 100
    },
    {
      "question": "Quelle est la définition de la 'faute lourde'?",
      "answer": "Faute qui dénote une insouciance, imprudence ou négligence grossières (art. 1474 C.c.Q.).",
      "page": 83
    },
    {
      "question": "Qui est responsable de la ruine d'un bâtiment?",
      "answer": "Le propriétaire (art. 1467 C.c.Q.).",
      "page": 84
    },
    {
      "question": "Quelle présomption bénéficie à la victime d'un défaut de sécurité?",
      "answer": "Présomption de responsabilité du fabricant/fournisseur lorsque le défaut est prouvé.",
      "page": 89
    },
    {
      "question": "Qu'est-ce que l'obligation de minimiser ses dommages?",
      "answer": "Devoir de la victime de limiter l'aggravation de son préjudice (art. 1479 C.c.Q.).",
      "page": 97
    },
    {
      "question": "Quand la solidarité s'applique-t-elle en responsabilité?",
      "answer": "Lorsque plusieurs personnes ont causé un même préjudice et qu'on ne peut identifier l'auteur exact.",
      "page": 98
    },
    {
      "question": "Quel délai de prescription s'applique aux agressions sexuelles?",
      "answer": "30 ans (art. 2926.1 C.c.Q.).",
      "page": 101
    },
    {
      "question": "Pourquoi l'expert en sinistre doit-il informer l'assuré des délais de prescription?",
      "answer": "En raison de ses obligations déontologiques (art. 18 Code de déontologie).",
      "page": 99
    },
    {
      "question": "Quelle est la définition de la 'prime' en assurance?",
      "answer": "Somme payée par le preneur en contrepartie de l'engagement de l'assureur.",
      "page": 63
    },
    {
      "question": "Qui peut être 'assuré' dans un contrat d'assurance de dommages?",
      "answer": "La personne ayant un intérêt assurable dans les biens couverts.",
      "page": 61
    },
    {
      "question": "Quelle est la sanction d'une clause abusive?",
      "answer": "Nullité de la clause ou réduction de l'obligation qui en découle.",
      "page": 73
    },
    {
      "question": "Qu'est-ce que la 'force obligatoire' du contrat?",
      "answer": "L'obligation de respecter le contrat tel que formé (art. 1434 C.c.Q.).",
      "page": 72
    },
    {
      "question": "Quelle est la différence entre préjudice moral et matériel?",
      "answer": "Le moral atteint les droits de la personnalité, le matériel concerne les biens ou pertes pécuniaires.",
      "page": 79
    },
{
    "question": "Quels sont les trois éléments essentiels d'un contrat d'assurance ?",
    "answer": "Le risque, la prime et la prestation.",
    "page": 113
  },
  {
    "question": "À quel moment un contrat d'assurance est-il formé selon l'article 2398 C.c.Q. ?",
    "answer": "Dès que l'assureur accepte la proposition du preneur.",
    "page": 113
  },
  {
    "question": "Quelle est la sanction pour une déclaration tardive de sinistre si l'assureur subit un préjudice ?",
    "answer": "Déchéance du droit à l'indemnité.",
    "page": 147
  },
  {
    "question": "Quelle méthode d'évaluation utilise-t-on par défaut pour les contrats à valeur indéterminée ?",
    "answer": "La valeur de remplacement dépréciée.",
    "page": 152
  },
  {
    "question": "Quelle est la durée maximale d'inoccupation d'une résidence principale sans aggravation de risque ?",
    "answer": "30 jours.",
    "page": 131
  },
  {
    "question": "Qui peut invoquer la subrogation contre le tiers responsable d'un sinistre ?",
    "answer": "L'assureur après paiement de l'indemnité.",
    "page": 159
  },
  {
    "question": "Quelle sanction s'applique en cas de déclaration mensongère sur des biens meubles lors d'un sinistre ?",
    "answer": "Perte du droit à l'indemnité pour la catégorie de biens concernée.",
    "page": 149
  },
  {
    "question": "Quel article du C.c.Q. régit la réduction proportionnelle en cas de sous-assurance ?",
    "answer": "Article 2493 C.c.Q.",
    "page": 155
  },
  {
    "question": "Dans quel cas l'assureur peut-il résilier unilatéralement un contrat d'assurance automobile après 60 jours ?",
    "answer": "Pour non-paiement de prime ou aggravation du risque.",
    "page": 125
  },
  {
    "question": "Qu'est-ce qu'un contrat d'assurance provisoire ?",
    "answer": "Une couverture immédiate délivrée avant l'acceptation définitive de la proposition (note de couverture).",
    "page": 114
  },
  {
    "question": "Quelles sont les trois obligations comprises dans la preuve de perte ?",
    "answer": "1) Déclarer les circonstances du sinistre 2) Fournir pièces justificatives 3) Attester la véracité sous serment.",
    "page": 148
  },
  {
    "question": "Quelle est la sanction pour non-respect d'un engagement formel ?",
    "answer": "Suspension de la garantie d'assurance.",
    "page": 122
  },
  {
    "question": "Qui est considéré comme faisant partie de la 'maison de l'assuré' pour l'immunité de subrogation ?",
    "answer": "Personnes liées par affection ou parenté vivant sous le même toit (interprétation jurisprudentielle élargie).",
    "page": 160
  },
  {
    "question": "Quel délai l'assureur a-t-il pour payer l'indemnité après réception des documents ?",
    "answer": "60 jours.",
    "page": 150
  },
  {
    "question": "Qu'est-ce que la franchise en assurance ?",
    "answer": "Montant des dommages restant à la charge de l'assuré avant l'intervention de l'assureur.",
    "page": 153
  },
  {
    "question": "Quelle est la différence entre annulation et résiliation d'un contrat ?",
    "answer": "L'annulation rétroagit (contrat nul ab initio), la résiliation prend effet pour l'avenir.",
    "page": 123
  },
  {
    "question": "Quel article du C.c.Q. protège les créanciers hypothécaires lors de la modification d'un contrat ?",
    "answer": "Article 2478 C.c.Q. (avis de 15 jours obligatoire).",
    "page": 124
  },
  {
    "question": "Qu'est-ce que l'aggravation de risque en assurance ?",
    "answer": "Circonstance augmentant les risques garantis résultant des faits de l'assuré.",
    "page": 130
  },
  {
    "question": "Quelle méthode d'évaluation prévoit une valeur fixée à l'avance par les parties ?",
    "answer": "Contrat à valeur agréée.",
    "page": 152
  },
  {
    "question": "Qui bénéficie de l'attribution légale de l'indemnité selon l'article 2497 C.c.Q. ?",
    "answer": "Créanciers hypothécaires ou prioritaires selon leur rang.",
    "page": 157
  },
  {
    "question": "Quelle est la sanction pour fausse déclaration initiale si la mauvaise foi est établie ?",
    "answer": "Nullité du contrat.",
    "page": 121
  },
  {
    "question": "Qu'est-ce que la subrogation légale ?",
    "answer": "Substitution automatique de l'assureur dans les droits de l'assuré contre le tiers responsable.",
    "page": 158
  },
  {
    "question": "Quelle limite s'applique à l'obligation de déclaration du risque selon l'art. 2409 C.c.Q. ?",
    "answer": "La déclaration doit être substantiellement conforme (pas exactement conforme).",
    "page": 118
  },
  {
    "question": "Quelle règle protège l'assuré lors du renouvellement avec modifications ?",
    "answer": "Modifications opposables seulement si indiquées dans un document distinct (art. 2405 al.3 C.c.Q.).",
    "page": 125
  },
  {
    "question": "Quand la prime devient-elle exigible selon l'art. 2469 C.c.Q. ?",
    "answer": "Au commencement du risque couvert.",
    "page": 133
  },
  {
    "question": "Quelle est la durée maximale de présence de gens de métier sans déclaration d'aggravation ?",
    "answer": "30 jours.",
    "page": 131
  },
  {
    "question": "Quel article interdit à l'assureur d'invoquer des déclarations verbales ?",
    "answer": "Article 2403 C.c.Q.",
    "page": 120
  },
  {
    "question": "Qu'est-ce qu'un engagement formel en assurance ?",
    "answer": "Engagement de l'assuré à adopter des mesures pour diminuer le risque.",
    "page": 122
  },
  {
    "question": "Quelle est la sanction pour non-déclaration d'aggravation de risque ?",
    "answer": "Réduction proportionnelle ou résiliation du contrat.",
    "page": 132
  },
  {
    "question": "Qui peut aviser l'assureur d'un sinistre selon l'art. 2470 C.c.Q. ?",
    "answer": "L'assuré ou tout intéressé (victime, créancier, etc.).",
    "page": 146
  },
  {
    "question": "Qu'est-ce que la règle de l'assuré 'normalement prévoyant' ?",
    "answer": "Obligation résiduelle de déclarer au-delà du questionnaire si les circonstances l'exigent.",
    "page": 119
  },
  {
    "question": "Quelle est la conséquence d'une faute intentionnelle en assurance responsabilité ?",
    "answer": "L'assureur n'indemnise pas la victime et ne défend pas l'assuré.",
    "page": 129
  },
  {
    "question": "Quel article rend les dispositions du Code civil impératives en assurance ?",
    "answer": "Article 2414 C.c.Q.",
    "page": 123
  },
  {
    "question": "Qu'est-ce que la surassurance ?",
    "answer": "Montant d'assurance supérieur à la valeur réelle du bien.",
    "page": 155
  },
  {
    "question": "Quelle méthode d'évaluation couvre le coût de remplacement sans dépréciation ?",
    "answer": "Valeur à neuf.",
    "page": 152
  },
  {
    "question": "Quel est l'effet d'une clause hypothécaire pour le créancier ?",
    "answer": "Statut d'assuré indépendant (immunité contre les manquements de l'assuré).",
    "page": 157
  },
  {
    "question": "Quelle est la prescription pour une action en paiement d'indemnité ?",
    "answer": "3 ans à compter du refus de l'assureur.",
    "page": 151
  },
  {
    "question": "Qu'est-ce que l'intérêt d'assurance selon l'art. 2481 C.c.Q. ?",
    "answer": "Préjudice direct et immédiat causé par la perte du bien.",
    "page": 135
  },
  {
    "question": "Quand l'assureur peut-il exercer son recours subrogatoire ?",
    "answer": "Après paiement de l'indemnité à l'assuré.",
    "page": 159
  },
  {
    "question": "Quelle est la différence entre faute lourde et faute intentionnelle ?",
    "answer": "La faute intentionnelle implique l'intention de nuire, la faute lourde non.",
    "page": 128
  },
  {
    "question": "Quel article régit le contrat 'pour le compte de qui il appartiendra' ?",
    "answer": "Article 2483 al.1 C.c.Q.",
    "page": 137
  },
  {
    "question": "Quelle est la sanction pour non-respect de l'obligation de défense en responsabilité ?",
    "answer": "L'assureur peut être condamné à des dommages-intérêts envers l'assuré.",
    "page": 142
  },
  {
    "question": "Qui détermine l'étendue de la garantie en assurance de biens ?",
    "answer": "Le consentement des parties (principe de liberté contractuelle).",
    "page": 137
  },
  {
    "question": "Qu'est-ce que la sous-assurance ?",
    "answer": "Montant d'assurance inférieur à la valeur réelle du bien.",
    "page": 154
  },
  {
    "question": "Quelle règle s'applique en cas de pluralité d'assureurs pour un même bien ?",
    "answer": "Contribution proportionnelle au montant d'assurance souscrit.",
    "page": 153
  },
  {
    "question": "Quel est le délai de présomption d'acceptation des modifications au renouvellement ?",
    "answer": "30 jours après réception du document.",
    "page": 125
  },
  {
    "question": "Qu'est-ce qu'une divergence au sens de l'art. 2400 C.c.Q. ?",
    "answer": "Opposition substantielle entre police et proposition nécessitant un document séparé.",
    "page": 115
  },
  {
    "question": "Quelle limite s'applique à la subrogation selon l'art. 2474 C.c.Q. ?",
    "answer": "Interdiction d'être subrogé contre les personnes de la maison de l'assuré.",
    "page": 159
  },
  {
    "question": "Quel article oblige l'assureur à défendre l'assuré en responsabilité ?",
    "answer": "Article 2503 C.c.Q.",
    "page": 142
  },
  {
    "question": "Qu'est-ce que la force majeure en assurance ?",
    "answer": "Événement imprévisible et irrésistible (art. 1470 C.c.Q.).",
    "page": 126
  },
  {
    "question": "Qui doit prouver la fausse déclaration initiale ?",
    "answer": "L'assureur (fardeau de la preuve).",
    "page": 120
  },
  {
    "question": "Quelle est la sanction pour une transaction sans consentement de l'assureur ?",
    "answer": "Transaction inopposable à l'assureur.",
    "page": 145
  },
  {
    "question": "Qu'est-ce que la réduction proportionnelle de l'indemnité ?",
    "answer": "Réduction calculée par rapport au sous-assurance (art. 2493 C.c.Q.).",
    "page": 154
  },
  {
    "question": "Qui bénéficie du paiement direct en assurance responsabilité ?",
    "answer": "La victime (art. 2500 C.c.Q.).",
    "page": 141
  },
  {
    "question": "Quel article interdit les clauses d'exclusion générales pour violation de loi ?",
    "answer": "Article 2402 al.1 C.c.Q. (valable seulement pour actes criminels).",
    "page": 140
  },
  {
    "question": "Qu'est-ce que la note de couverture ?",
    "answer": "Contrat d'assurance provisoire délivré avant acceptation définitive.",
    "page": 114
  },
  {
    "question": "Quelle est la règle pour l'assurance de biens à venir ?",
    "answer": "Permise par l'art. 2482 C.c.Q. (existence non requise à la conclusion).",
    "page": 136
  },
  {
    "question": "Qui est responsable de la preuve de valeur en contrat à valeur indéterminée ?",
    "answer": "L'assuré (demandeur de l'indemnité).",
    "page": 151
  },
  {
    "question": "Quel critère définit l'intérêt d'assurance selon la jurisprudence Kosmopoulos ?",
    "answer": "Lien suffisant causant un préjudice en cas de réalisation du risque.",
    "page": 136
  },
  {
    "question": "Qu'est-ce qu'une réticence en assurance ?",
    "answer": "Omission de déclarer une circonstance connue et pertinente.",
    "page": 120
  },
  {
    "question": "Quelle est la durée typique d'un contrat d'assurance de dommages ?",
    "answer": "1 an.",
    "page": 123
  },
  {
    "question": "Quel article prévoit la réduction d'indemnité pour fausse déclaration de bonne foi ?",
    "answer": "Article 2411 C.c.Q.",
    "page": 120
  },
  {
    "question": "Qu'est-ce que la théorie des 'deux contrats' en clause hypothécaire ?",
    "answer": "Clause créant un contrat distinct entre assureur et créancier.",
    "page": 157
  },
  {
    "question": "Qui doit aviser l'assureur d'une aggravation de risque ?",
    "answer": "L'assuré (obligation proactive).",
    "page": 130
  },
  {
    "question": "Quel article étend la garantie incendie aux explosions sans feu ?",
    "answer": "Article 2485 C.c.Q.",
    "page": 138
  },
  {
    "question": "Qu'est-ce que la valeur de remplacement dépréciée ?",
    "answer": "Valeur de remplacement moins dépréciation + éléments récupérés.",
    "page": 152
  },
  {
    "question": "Quelle sanction s'applique si l'assuré compromet la subrogation ?",
    "answer": "Libération partielle ou totale de l'assureur de son obligation.",
    "page": 160
  },
  {
    "question": "Qui détermine le montant d'assurance en contrat à valeur agréée ?",
    "answer": "Les parties à l'avance lors de la conclusion.",
    "page": 151
  },
  {
    "question": "Quel est l'effet d'une clause de non-responsabilité sur la subrogation ?",
    "answer": "Prive l'assureur de son recours contre le tiers.",
    "page": 160
  },
  {
    "question": "Qu'est-ce que l'immunité de l'assureur de responsabilité civile domestique ?",
    "answer": "Impossibilité de subrogation contre l'assureur des personnes de la maison.",
    "page": 159
  },
  {
    "question": "Quelle règle protège les victimes d'automobile contre les exceptions de l'assureur ?",
    "answer": "Art. 119 LAA : inopposabilité jusqu'au montant obligatoire.",
    "page": 129
  },
  {
    "question": "Qui est présumé connaître les circonstances notoires selon l'art. 2408 C.c.Q. ?",
    "answer": "L'assureur.",
    "page": 118
  },
  {
    "question": "Quel article prévoit le recours direct de la victime contre l'assureur ?",
    "answer": "Article 2501 C.c.Q.",
    "page": 143
  },
  {
    "question": "Qu'est-ce que la prescription du recours subrogatoire ?",
    "answer": "3 ans à compter du fait dommageable (pas du paiement).",
    "page": 160
  },
  {
    "question": "Quelle est la règle pour les biens disparus lors d'un incendie ?",
    "answer": "Couverts sauf preuve de vol non assuré (art. 2485 al.1 in fine C.c.Q.).",
    "page": 138
  },
  {
    "question": "Qui peut demander la nullité pour absence d'intérêt d'assurance ?",
    "answer": "L'assureur (art. 2484 C.c.Q.).",
    "page": 123
  },
  {
    "question": "Quel article régit les modifications par avenant ?",
    "answer": "Article 2405 C.c.Q.",
    "page": 116
  },
  {
    "question": "Qu'est-ce que la règle de proportionnalité en pluralité d'assureurs ?",
    "answer": "Contribution = (Montant assurance / Total assurances) × Perte.",
    "page": 153
  },
  {
    "question": "Quelle est la conséquence d'une faute simple de l'assuré ?",
    "answer": "Couverture maintenue sauf exclusion expresse (art. 2464 al.1 C.c.Q.).",
    "page": 126
  },
  {
    "question": "Qui supporte le coût de la défense en responsabilité ?",
    "answer": "L'assureur (au-delà du montant d'assurance).",
    "page": 142
  },
  {
    "question": "Quel article impose l'obligation de déclaration initiale du risque ?",
    "answer": "Article 2408 C.c.Q.",
    "page": 117
  },
  {
    "question": "Qu'est-ce que l'ordre public relatif en assurance ?",
    "answer": "Dispositions impératives au bénéfice de l'assuré (art. 2414 C.c.Q.).",
    "page": 123
  },
  {
    "question": "Quelle méthode calcule l'indemnité en sous-assurance ?",
    "answer": "Indemnité = (Montant assurance / Valeur réelle) × Perte.",
    "page": 154
  },
  {
    "question": "Qui doit recevoir un exemplaire de l'avenant si modification demandée par écrit ?",
    "answer": "Le preneur (art. 2405 al.2 C.c.Q.).",
    "page": 116
  },
  {
    "question": "Quel article prévoit l'attribution légale aux créanciers ?",
    "answer": "Article 2497 C.c.Q.",
    "page": 157
  },
  {
    "question": "Qu'est-ce qu'un contrat à valeur indéterminée ?",
    "answer": "Valeur déterminée après sinistre selon méthode convenue ou habitude.",
    "page": 151
  },
  {
    "question": "Quelle est la sanction pour non-paiement de prime ?",
    "answer": "Résiliation après préavis (15 jours en général, 30 en auto).",
    "page": 134
  },
  {
    "question": "Qui doit consentir à la cession du contrat d'assurance ?",
    "answer": "L'assureur (sauf décès, faillite ou cession entre coassurés).",
    "page": 134
  },
  {
    "question": "Quel article interdit la subrogation contre l'assuré ?",
    "answer": "Principe implicite (art. 2474 C.c.Q. in fine).",
    "page": 159
  },
  {
    "question": "Qu'est-ce que l'exception de waiver en déclaration de sinistre ?",
    "answer": "Renonciation implicite de l'assureur par son comportement.",
    "page": 150
  },
  {
    "question": "Quelle est la règle pour les biens à usage professionnel/personnel en sinistre ?",
    "answer": "Couverture étendue sauf exclusion expresse (art. 2488 C.c.Q.).",
    "page": 138
  },
  {
    "question": "Qui est tenu de l'obligation de déclaration si preneur ≠ assuré ?",
    "answer": "L'assuré si demandé par l'assureur (art. 2408 C.c.Q.).",
    "page": 117
  },
  {
    "question": "Quel article prévoit l'immunité pour les personnes de la maison ?",
    "answer": "Article 2474 al.2 C.c.Q.",
    "page": 158
  },
  {
    "question": "Qu'est-ce que la contre-proposition en assurance ?",
    "answer": "Acceptation modifiée constituant une nouvelle offre (art. 1393 C.c.Q.).",
    "page": 116
  },
  {
    "question": "Quelle est la limite à l'opposabilité des moyens de défense en responsabilité ?",
    "answer": "Seuls les moyens antérieurs au sinistre sont opposables à la victime.",
    "page": 144
  },
  {
    "question": "Qui doit prouver le préjudice pour sanctionner un avis tardif de sinistre ?",
    "answer": "L'assureur (ex: impossibilité d'enquêter).",
    "page": 147
  },
  {
    "question": "Quel article régit la durée des contrats provisoires ?",
    "answer": "Généralement 30-60 jours (pratique, non codifié).",
    "page": 114
  },
  {
    "question": "Qu'est-ce que le droit de rétention des primes en cas de nullité ?",
    "answer": "Obligation de remboursement par l'assureur (art. 1422 al.2 C.c.Q.).",
    "page": 121
  },
  {
    "question": "Quelle condition annule la protection de la clause hypothécaire ?",
    "answer": "Absence de mandat pour assurer 'au nom et pour compte' du créancier.",
    "page": 130
  },
  {
    "question": "Qui est responsable de l'évaluation en contrat à valeur agréée ?",
    "answer": "Les parties lors de la conclusion (valeur présumée exacte).",
    "page": 151
  },
  {
    "question": "Quel article prévoit la couverture des mesures de sauvetage ?",
    "answer": "Article 2487 C.c.Q.",
    "page": 138
  },
  {
    "question": "Qu'est-ce que l'exception de notoriété en déclaration de risque ?",
    "answer": "Circonstances connues/presumées connues de l'assureur (art. 2408 in fine C.c.Q.).",
    "page": 118
  },
  {
    "question": "Quelle règle s'applique aux résidences secondaires inoccupées ?",
    "answer": "Non considérées comme aggravation de risque (art. 2468 C.c.Q.).",
    "page": 131
  },
  {
    "question": "Qui peut exercer le recours après paiement partiel par subrogation ?",
    "answer": "La victime pour le solde non couvert.",
    "page": 160
  },
  {
    "question": "Quel article impose l'obligation de défense avant procès ?",
    "answer": "Article 2503 C.c.Q. (inclut mise en demeure).",
    "page": 142
  },
  {
    "question": "Qu'est-ce que la réintégration des franchises en assurance collective ?",
    "answer": "Non mentionné (hors champ du document).",
    "page": null
  },
  {
    "question": "Quelle est la sanction pour une proposition verbale non transcrite ?",
    "answer": "Inopposable à l'assuré (art. 2403 C.c.Q.).",
    "page": 120
  },
  {
    "question": "Qui décide du mode d'indemnisation (argent ou réparation) ?",
    "answer": "L'assureur si clause prévue (art. 2494 C.c.Q.).",
    "page": 156
  },
  {
    "question": "Quel article prévoit l'inopposabilité des divergences non signalées ?",
    "answer": "Article 2400 al.2 C.c.Q.",
    "page": 115
  },
    {
      "question": "Quel organisme est chargé d'administrer le régime québécois d'encadrement du secteur financier?",
      "answer": "Autorité des marchés financiers (l'Autorité)",
      "page": 173
    },
    {
      "question": "Quelle loi a constitué l'Autorité des marchés financiers?",
      "answer": "Loi sur l'Autorité des marchés financiers (devenue Loi sur l'encadrement du secteur financier)",
      "page": 173
    },
    {
      "question": "Quelle est la mission principale de la Chambre de l'assurance de dommages (ChAD)?",
      "answer": "Protéger le public en maintenant la discipline et en veillant à la formation continue et à la déontologie des représentants et experts en sinistre",
      "page": 175
    },
    {
      "question": "Qui enquête sur les représentants en assurance de dommages pour la ChAD?",
      "answer": "Le syndic",
      "page": 175
    },
    {
      "question": "Quel organisme protège les assurés en cas d'insolvabilité d'une compagnie d'assurance?",
      "answer": "Société d'indemnisation en matière d'assurances IARD (SIMA-IARD)",
      "page": 177
    },
    {
      "question": "Quel est le montant maximal d'indemnisation par réclamation du Fonds d'indemnisation des services financiers?",
      "answer": "200 000 $",
      "page": 178
    },
    {
      "question": "Quel organisme représente les assureurs de dommages au Canada?",
      "answer": "Bureau d'assurance du Canada (BAC)",
      "page": 178
    },
    {
      "question": "Quel organisme fédéral réglemente les banques et sociétés d'assurance?",
      "answer": "Bureau du surintendant des institutions financières (BSIF)",
      "page": 179
    },
    {
      "question": "Quelle directive commune ont publiée le CCRRA et les OCRA en 2018?",
      "answer": "Conduite des activités d'assurance et traitement équitable des clients",
      "page": 180
    },
    {
      "question": "Quels sont les deux organismes membres à la fois du CCRRA et des OCRA?",
      "answer": "L'Autorité des marchés financiers et la ChAD",
      "page": 180
    },
    {
      "question": "Quelle commission québécoise protège les renseignements personnels?",
      "answer": "Commission d'accès à l'information du Québec (CAI)",
      "page": 182
    },
    {
      "question": "Quel organisme gère la Convention d'adhésion aux formulaires d'assurance habitation?",
      "answer": "Bureau d'assurance du Canada (BAC)",
      "page": 179
    },
    {
      "question": "Quel est le rôle principal du Service de conciliation en assurance de dommages (SCAD)?",
      "answer": "Trouver des solutions équitables pour les consommateurs et leurs assureurs",
      "page": 183
    },
    {
      "question": "Qui préside le comité de discipline de la ChAD?",
      "answer": "Un avocat",
      "page": 176
    },
    {
      "question": "Combien de membres siègent au comité de discipline de la ChAD lors d'une audition?",
      "answer": "Trois membres (un président et deux professionnels)",
      "page": 176
    },
    {
      "question": "Quelle est la mission du Groupement des assureurs automobiles (GAA)?",
      "answer": "Participer au développement de l'assurance automobile au Québec et veiller aux intérêts des consommateurs",
      "page": 182
    },
    {
      "question": "Quel organisme défend les intérêts des cabinets de courtage?",
      "answer": "Regroupement des cabinets de courtage d'assurance du Québec (RCCAQ)",
      "page": 183
    },
    {
      "question": "Quels sont les deux catégories de disciplines en assurance de dommages selon la LDPSF?",
      "answer": "Assurance de dommages des particuliers et Assurance de dommages des entreprises",
      "page": 175
    },
    {
      "question": "Quel organisme traite les plaintes contre les représentants en assurance?",
      "answer": "Autorité des marchés financiers",
      "page": 174
    },
    {
      "question": "Quel est le délai pour déposer une réclamation au Fonds d'indemnisation?",
      "answer": "Dans l'année suivant la connaissance de la fraude",
      "page": 178
    },
    {
      "question": "Quel organisme coordonne la réglementation des produits financiers au Canada?",
      "answer": "Forum conjoint des autorités de réglementation du marché financier",
      "page": 181
    },
    {
      "question": "Quelle loi gère la Commission d'accès à l'information?",
      "answer": "Loi sur l'accès aux documents des organismes publics et sur la protection des renseignements personnels",
      "page": 182
    },
    {
      "question": "Qui inspecte les cabinets de moins de 25 représentants?",
      "answer": "Chambre de l'assurance de dommages (ChAD)",
      "page": 174
    },
    {
      "question": "Quel organisme gère le Fonds d'indemnisation des services financiers?",
      "answer": "Autorité des marchés financiers",
      "page": 177
    },
    {
      "question": "Quelle réforme a introduit le projet de loi n°141?",
      "answer": "Réforme des lois régissant le secteur financier et création du Comité consultatif des consommateurs",
      "page": 173
    },
    {
      "question": "Quels sont les trois secteurs coordonnés par le Forum conjoint?",
      "answer": "Régimes de retraite, valeurs mobilières et assurance",
      "page": 181
    },
    {
      "question": "Quel organisme établit des normes pour les intermédiaires en assurance?",
      "answer": "Organismes canadiens de réglementation en assurance (OCRA)",
      "page": 181
    },
    {
      "question": "Quelle est la principale fonction du comité de discipline?",
      "answer": "Entendre les plaintes contre les membres de la ChAD et imposer des sanctions",
      "page": 176
    },
    {
      "question": "Qui finance le programme de la SIMA-IARD?",
      "answer": "Les sociétés membres (assureurs de dommages)",
      "page": 177
    },
    {
      "question": "Quels documents le syndic peut-il examiner lors d'une enquête?",
      "answer": "Livres, registres, comptes, dossiers et documents pertinents",
      "page": 176
    },
    {
      "question": "Quelle est la mission éducative du BAC?",
      "answer": "Informer le public et élaborer des campagnes d'éducation",
      "page": 178
    },
    {
      "question": "Quel organisme n'a PAS compétence sur les assureurs québécois?",
      "answer": "Bureau du surintendant des institutions financières (BSIF)",
      "page": 179
    },
    {
      "question": "Quel article de la LDPSF institue la ChAD?",
      "answer": "Article 284",
      "page": 175
    },
    {
      "question": "Quelle protection offre la Directive du CCRRA/OCRA?",
      "answer": "Traitement équitable des clients et information claire",
      "page": 180
    },
    {
      "question": "Quand le SCAD a-t-il été établi?",
      "answer": "2002",
      "page": 183
    },
    {
      "question": "Quels sont les trois éléments requis pour une réclamation au Fonds d'indemnisation?",
      "answer": "Écriture, exposition des faits, identification du responsable et montant",
      "page": 178
    },
    {
      "question": "Quel organisme assiste les consommateurs via des services de règlement de différends?",
      "answer": "Autorité des marchés financiers",
      "page": 173
    },
    {
      "question": "Quelle est la fonction principale du GAA?",
      "answer": "Garantir l'accès à l'assurance automobile et simplifier les règlements de sinistres",
      "page": 182
    },
    {
      "question": "Qui peut prolonger le délai de réclamation au Fonds d'indemnisation?",
      "answer": "L'Autorité des marchés financiers",
      "page": 178
    },
    {
      "question": "Quels types d'assurance relèvent du SCAD?",
      "answer": "Habitation, automobile et commerciale",
      "page": 183
    },
    {
      "question": "Quel organisme publie des bulletins pour informer l'industrie?",
      "answer": "Autorité des marchés financiers",
      "page": 174
    },
    {
      "question": "Quelle loi régit la distribution de produits financiers au Québec?",
      "answer": "Loi sur la distribution de produits et services financiers (LDPSF)",
      "page": 171
    },
    {
      "question": "Quel organisme gère les garanties minimales en assurance habitation?",
      "answer": "Bureau d'assurance du Canada (BAC)",
      "page": 179
    },
    {
      "question": "Qui subroge les droits de la victime après indemnisation?",
      "answer": "L'Autorité des marchés financiers",
      "page": 178
    },
    {
      "question": "Quel est le motif le plus courant de plainte à la ChAD?",
      "answer": "Défaut d'expliquer, d'informer et de conseiller adéquatement",
      "page": 176
    },
    {
      "question": "Quel organisme traite les plaintes contre les assureurs?",
      "answer": "Autorité des marchés financiers",
      "page": 187
    },
    {
      "question": "Qui finance le BSIF?",
      "answer": "Les institutions financières et régimes de retraite qu'il réglemente",
      "page": 179
    },
    {
      "question": "Quelle section de la CAI traite les enquêtes?",
      "answer": "Section de surveillance",
      "page": 182
    },
    {
      "question": "Quand l'Autorité des marchés financiers a-t-elle été constituée?",
      "answer": "1er février 2004",
      "page": 173
    },
    {
      "question": "Quel organisme établit les règles de déontologie pour les experts en sinistre?",
      "answer": "Chambre de l'assurance de dommages (ChAD)",
      "page": 175
    },
    {
      "question": "Quel recours existe contre une décision du comité de discipline?",
      "answer": "Appel à la Cour du Québec",
      "page": 176
    },
    {
      "question": "Quelle loi protège les dénonciateurs auprès de l'Autorité?",
      "answer": "Projet de loi n°141",
      "page": 173
    },
    {
      "question": "Qui sont les membres obligatoires de la SIMA-IARD?",
      "answer": "Tous les assureurs de dommages au Canada (sauf exceptions)",
      "page": 177
    },
    {
      "question": "Quel organisme collige des statistiques sur l'assurance?",
      "answer": "Bureau d'assurance du Canada (BAC)",
      "page": 178
    },
 {
    "question": "Quels sont les trois types de représentants en assurance de dommages ?",
    "answer": "Agent, courtier et expert en sinistre",
    "page": 191"
  },
  {
    "question": "Quelle loi régit la distribution de produits et services financiers au Québec ?",
    "answer": "Loi sur la distribution de produits et services financiers (LDPSF)",
    "page": 191"
  },
  {
    "question": "Quelle autorité délivre les certificats aux représentants ?",
    "answer": "Autorité des marchés financiers (AMF)",
    "page": 193"
  },
  {
    "question": "Quelle est la durée de validité d'un certificat de représentant ?",
    "answer": "1 an",
    "page": 194"
  },
  {
    "question": "Quels sont les trois modes d'exercice d'un représentant ?",
    "answer": "Représentant rattaché à un cabinet, associé/employé d'une société autonome, ou représentant autonome",
    "page": 195"
  },
  {
    "question": "Quelle est la différence fondamentale entre un agent et un courtier en assurance ?",
    "answer": "L'agent représente un seul assureur, le courtier offre des produits de plusieurs assureurs",
    "page": 192-193"
  },
  {
    "question": "Quels documents doit remettre un représentant au client lors du premier contact ?",
    "answer": "Carte professionnelle avec nom, coordonnées, titre et nom du cabinet/société",
    "page": 203"
  },
  {
    "question": "Quel est le montant minimal de couverture d'assurance responsabilité professionnelle pour un représentant autonome ?",
    "answer": "500 000$ par réclamation et 1 000 000$ par année",
    "page": 212"
  },
  {
    "question": "Combien de temps les dossiers clients doivent-ils être conservés ?",
    "answer": "5 ans à compter du dernier événement significatif",
    "page": 206"
  },
  {
    "question": "Qu'est-ce qu'un compte séparé en assurance ?",
    "answer": "Compte distinct pour les fonds reçus pour le compte d'autrui",
    "page": 207"
  },
  {
    "question": "Qu'est-ce que le mandat apparent en droit des assurances ?",
    "answer": "Situation où un tiers croit raisonnablement à l'existence d'un mandat qui n'existe pas réellement",
    "page": 217"
  },
  {
    "question": "Quels sont les trois éléments à prouver pour établir la responsabilité civile ?",
    "answer": "Faute, préjudice, lien de causalité",
    "page": 224"
  },
  {
    "question": "Quelle instance traite les plaintes déontologiques contre les représentants ?",
    "answer": "Comité de discipline de la Chambre de l'assurance de dommages (ChAD)",
    "page": 226"
  },
  {
    "question": "Quelle est la différence entre éthique et déontologie ?",
    "answer": "L'éthique concerne les principes moraux, la déontologie les règles et obligations professionnelles",
    "page": 231"
  },
  {
    "question": "Qui peut partager des commissions avec un cabinet d'assurance ?",
    "answer": "Autres inscrits, courtiers immobiliers, institutions financières, assureurs",
    "page": 200"
  },
  {
    "question": "Quelle est la définition légale d'un expert en sinistre ?",
    "answer": "Personne qui enquête sur un sinistre, en estime les dommages ou en négocie le règlement",
    "page": 193"
  },
  {
    "question": "Quelles sont les catégories autorisées pour un agent en assurance de dommages ?",
    "answer": "Assurance de dommages des particuliers et assurance de dommages des entreprises",
    "page": 192"
  },
  {
    "question": "Qu'est-ce qu'un cabinet multidisciplinaire en assurance ?",
    "answer": "Cabinet offrant des produits et services dans plusieurs disciplines",
    "page": 197"
  },
  {
    "question": "Quelle obligation a un cabinet concernant la surveillance de ses représentants ?",
    "answer": "S'assurer qu'ils agissent conformément à la LDPSF et surveiller leurs activités",
    "page": 202"
  },
  {
    "question": "Qu'est-ce que la distribution sans représentant ?",
    "answer": "Offre de produits d'assurance par des distributeurs non certifiés dans le cadre d'autres activités professionnelles",
    "page": 213"
  },
  {
    "question": "Quel document remplace le guide de distribution depuis juin 2019 ?",
    "answer": "Sommaire et fiche de renseignements",
    "page": 214"
  },
  {
    "question": "Quelle est la franchise maximale autorisée pour l'assurance responsabilité professionnelle d'un cabinet avec >3 représentants ?",
    "answer": "25 000$",
    "page": 213"
  },
  {
    "question": "Dans quel cas un expert en sinistre représente-t-il l'assuré plutôt que l'assureur ?",
    "answer": "Lorsque ses services sont retenus directement par l'assuré (expert indépendant)",
    "page": 223"
  },
  {
    "question": "Quelle est la conséquence d'un mandat apparent pour l'assureur ?",
    "answer": "L'assureur est lié par les actes du représentant comme si le mandat existait réellement",
    "page": 217"
  },
  {
    "question": "Quelles sont les sanctions pénales maximales prévues par la LDPSF pour une personne morale ?",
    "answer": "Amendes jusqu'à 200 000$ (voire 1 000 000$ pour certaines infractions)",
    "page": 228"
  },
  {
    "question": "Qu'est-ce que le registre des mesures incitatives ?",
    "answer": "Registre décrivant les conditions et modalités des mesures incitatives offertes aux représentants",
    "page": 205"
  },
  {
    "question": "Quelle information doit contenir le registre des commissions ?",
    "answer": "Numéro de contrat/nom client, nom payeur, relevé de commission, détails du partage le cas échéant",
    "page": 208-209"
  },
  {
    "question": "Qui est responsable des fautes commises par un représentant rattaché à un cabinet ?",
    "answer": "Le cabinet est civilement responsable",
    "page": 202"
  },
  {
    "question": "Quelle est la durée de maintien de l'assurance responsabilité professionnelle après cessation d'activité ?",
    "answer": "5 ans",
    "page": 212"
  },
  {
    "question": "Quelles professions sont incompatibles avec l'activité de représentant ?",
    "answer": "Juge, policier, ministre du culte, directeur de funérailles, syndic de faillite, etc.",
    "page": 201-202"
  },
  {
    "question": "Qu'est-ce que la territorialité du certificat de représentant ?",
    "answer": "Le certificat n'autorise à exercer qu'au Québec",
    "page": 203"
  },
  {
    "question": "Qui peut refuser l'inscription d'un représentant autonome ?",
    "answer": "L'Autorité des marchés financiers",
    "page": 196"
  },
  {
    "question": "Quel est le rôle du syndic de la ChAD ?",
    "answer": "Recevoir les plaintes, enquêter sur les manquements déontologiques",
    "page": 226"
  },
  {
    "question": "Quelles sont les obligations d'un représentant concernant les renseignements personnels ?",
    "answer": "Collecte auprès du client, consentement pour usage tiers, exactitude, confidentialité",
    "page": 207,223"
  },
  {
    "question": "Qu'est-ce qu'une société autonome en assurance ?",
    "answer": "Société en nom collectif composée de représentants associés ou employés",
    "page": 211"
  },
  {
    "question": "Quel titre peut utiliser un cabinet inscrit dans plusieurs disciplines ?",
    "answer": "Cabinet de services financiers",
    "page": 200"
  },
  {
    "question": "Quelles sont les conditions d'exemption pour un représentant qui revient après une période d'arrêt ?",
    "answer": "Dépendent de la durée d'arrêt et des circonstances (ex: réduction des exigences si <1 an)",
    "page": 194"
  },
  {
    "question": "Qu'est-ce que la période probatoire pour un représentant ?",
    "answer": "Période de pratique supervisée obligatoire avant certification complète",
    "page": 194"
  },
  {
    "question": "Quels actes un représentant ne peut-il pas accomplir selon les règles de publicité ?",
    "answer": "Utiliser des éléments trompeurs, critiquer les concurrents, laisser croire à une approbation de l'AMF",
    "page": 204"
  },
  {
    "question": "Quelle est la procédure de traitement des plaintes ?",
    "answer": "Accusé de réception sous 5 jours, examen, possibilité de médiation par l'AMF",
    "page": 210"
  },
  {
    "question": "Qu'est-ce que le Règlement sur les modes alternatifs de distribution (RMAD) ?",
    "answer": "Règlement encadrant l'offre d'assurance par Internet et la distribution sans représentant",
    "page": 213"
  },
  {
    "question": "Quand un courtier en assurance est-il considéré mandataire de l'assuré ?",
    "answer": "Lorsqu'il recherche la meilleure protection pour répondre aux besoins spécifiques du client",
    "page": 219,222"
  },
  {
    "question": "Quelles sont les obligations d'un mandataire envers son mandant ?",
    "answer": "Agir avec prudence/diligence, informer le mandant, éviter les conflits d'intérêts",
    "page": 216"
  },
  {
    "question": "Quelle est la différence entre responsabilité contractuelle et extracontractuelle ?",
    "answer": "Contractuelle : inexécution d'un contrat ; Extracontractuelle : faute indépendante d'un contrat",
    "page": 224"
  },
  {
    "question": "Quels sont les trois types de préjudices reconnus en droit civil ?",
    "answer": "Corporel, matériel, moral",
    "page": 224"
  },
  {
    "question": "Quelle instance juge les infractions pénales selon la LDPSF ?",
    "answer": "Cour du Québec, Chambre criminelle et pénale",
    "page": 229"
  },
  {
    "question": "Qu'est-ce qu'un produit d'assurance 'afférent à un bien' ?",
    "answer": "Assurance liée à un bien ou service vendu (ex: assurance remplacement véhicule)",
    "page": 214"
  },
  {
    "question": "Quelles sont les obligations du représentant concernant l'évaluation des besoins du client ?",
    "answer": "Évaluer les besoins et proposer le produit le plus adapté",
    "page": 203"
  },
  {
    "question": "Qui est responsable lorsque l'agent donne une mauvaise interprétation d'une clause d'assurance ?",
    "answer": "L'assureur, car l'agent est son mandataire",
    "page": 220"
  },
  {
    "question": "Qu'est-ce que la règle de territorialité pour les certificats ?",
    "answer": "Le certificat n'est valide que pour exercer au Québec",
    "page": 203"
  },
  {
    "question": "Quelles sont les conditions pour qu'un mandat apparent soit reconnu ?",
    "answer": "1) Mandataire agit sans pouvoir réel 2) Tiers de bonne foi 3) Motifs raisonnables de croire au mandat 4) Mandant a laissé croire au mandat",
    "page": 217"
  },
  {
    "question": "Quel recours a un client victime d'une faute professionnelle d'un représentant ?",
    "answer": "Recours civil en dommages-intérêts devant les tribunaux civils",
    "page": 225"
  },
  {
    "question": "Quelle est la compétence de la Cour du Québec en matière civile ?",
    "answer": "Litiges entre 15 000,01$ et 84 999,99$",
    "page": 225"
  },
  {
    "question": "Qu'est-ce que le Code de déontologie des représentants en assurance de dommages ?",
    "answer": "Règles régissant les devoirs et obligations des agents et courtiers",
    "page": 232"
  },
  {
    "question": "Qui édicte les codes de déontologie en assurance ?",
    "answer": "Chambre de l'assurance de dommages (ChAD)",
    "page": 232"
  },
  {
    "question": "Quelle est la définition légale d'un cabinet en assurance ?",
    "answer": "Personne morale ayant un établissement au Québec",
    "page": 197"
  },
  {
    "question": "Quelles sont les obligations concernant la destruction des documents ?",
    "answer": "Destruction autorisée après 5 ans, avec respect de la confidentialité des renseignements personnels",
    "page": 206"
  },
  {
    "question": "Qu'est-ce que le registre des plaintes ?",
    "answer": "Registre obligatoire pour consigner toutes les plaintes reçues",
    "page": 209"
  },
  {
    "question": "Quelles informations doivent être déclarées semestriellement à l'AMF concernant les plaintes ?",
    "answer": "Référence, secteur, catégorie, dates, code postal, disposition, poursuite, répercussions, transfert à l'AMF",
    "page": 210"
  },
  {
    "question": "Qui est responsable des fautes d'un expert en sinistre mandaté par l'assureur ?",
    "answer": "L'assureur",
    "page": 219"
  },
  {
    "question": "Quelle est la conséquence si un représentant dépasse les pouvoirs de son contrat de représentation ?",
    "answer": "Il engage sa responsabilité personnelle",
    "page": 219"
  },
  {
    "question": "Qu'est-ce que l'obligation de disponibilité et diligence ?",
    "answer": "Obligation pour le représentant d'être disponible et diligent dans ses activités",
    "page": 201"
  },
  {
    "question": "Quand un représentant doit-il aviser son assureur responsabilité professionnelle ?",
    "answer": "Dès qu'il a des raisons de croire qu'un recours pourrait être entrepris contre lui",
    "page": 213"
  },
  {
    "question": "Quelle est la différence entre faute simple et faute lourde ?",
    "answer": "La faute lourde est une négligence grossière, mais n'inclut pas l'intention de nuire",
    "page": 212,224"
  },
  {
    "question": "Qui peut exercer un recours criminel contre un représentant ?",
    "answer": "Le substitut du procureur général (pas la victime)",
    "page": 229"
  },
  {
    "question": "Quels sont les éléments de la compétence visés par le chapitre 5 ?",
    "answer": "Comprendre les règles applicables à la pratique professionnelle quotidienne",
    "page": 189"
  },
  {
    "question": "Quelle est la définition d'une 'personne morale' selon le dictionnaire de droit québécois ?",
    "answer": "Entité légalement constituée, dotée d'une personnalité juridique indépendante de ses membres",
    "page": 197"
  },
  {
    "question": "Qu'est-ce que le franchisage en assurance ?",
    "answer": "Accord par lequel un cabinet autorise un autre cabinet à exploiter une franchise",
    "page": 200"
  },
  {
    "question": "Quelles sont les obligations d'un représentant concernant la divulgation des assureurs ?",
    "answer": "Divulguer au client le nom des assureurs dont il est autorisé à offrir les produits",
    "page": 203"
  },
  {
    "question": "Quand un agent doit-il divulguer son lien d'exclusivité avec un assureur ?",
    "answer": "Lorsqu'il agit pour un cabinet lié par contrat d'exclusivité à un seul assureur",
    "page": 203"
  },
  {
    "question": "Quelles sont les règles concernant l'utilisation des statistiques en publicité ?",
    "answer": "Permise à condition d'en indiquer la source",
    "page": 204"
  },
  {
    "question": "Qui doit approuver la publicité pour un produit d'assurance ?",
    "answer": "La personne qui commercialise le produit (ex: l'assureur)",
    "page": 205"
  },
  {
    "question": "Qu'est-ce qu'un dossier client doit obligatoirement contenir en assurance de dommages ?",
    "answer": "Nom client, montant/nature couverture, numéro police, dates, mode paiement, liste d'évaluation des biens",
    "page": 207"
  },
  {
    "question": "Quel est l'objectif principal d'un code de déontologie ?",
    "answer": "Protéger le public et assurer l'exercice intègre et compétent des activités professionnelles",
    "page": 232"
  },
  {
    "question": "Quelle est la durée de validité d'une inscription ?",
    "answer": "Jusqu'à sa radiation",
    "page": 197"
  },
  {
    "question": "Quelles sont les obligations des inscrits pour maintenir leur inscription ?",
    "answer": "Transmettre annuellement déclarations et documents requis dans les 45 jours suivant la demande",
    "page": 197"
  },
  {
    "question": "Quel organisme est responsable du maintien de la discipline pour les représentants en assurance de dommages ?",
    "options": [
      "Autorité des marchés financiers",
      "Chambre de l'assurance de dommages (ChAD)",
      "Ministère des Finances",
      "Ordre des assureurs"
    ],
    "answer": "b",
    "justification": "La ChAD a été chargée d'assurer la protection du public et le maintien de la discipline.",
    "page": 3
  },
  {
    "question": "Un représentant peut-il recevoir des cadeaux d'un client en plus de sa commission ?",
    "options": [
      "Oui, si la valeur est modeste",
      "Non, c'est strictement interdit",
      "Oui, avec déclaration à la ChAD",
      "Uniquement pour les fêtes"
    ],
    "answer": "b",
    "justification": "L'article 5 du Code interdit de recevoir argent, cadeaux ou avantages supplémentaires.",
    "page": 5
  },
  {
    "question": "Quelle sanction peut imposer le comité de discipline en cas de manquement ?",
    "options": [
      "Prison ferme",
      "Amende uniquement",
      "Réprimande à radiation",
      "Suspension de 6 mois maximum"
    ],
    "answer": "c",
    "justification": "Les sanctions vont de la simple réprimande à la radiation.",
    "page": 4
  },
  {
    "question": "Qui peut porter plainte contre un représentant ?",
    "options": [
      "Uniquement les clients directs",
      "L'entreprise employeur",
      "Tout particulier",
      "Uniquement la ChAD"
    ],
    "answer": "c",
    "justification": "Tout particulier estimant un manquement peut porter plainte.",
    "page": 3
  },
  {
    "question": "Qu'est-ce qu'un conflit d'intérêts selon l'article 10 ?",
    "options": [
      "Travailler pour deux assureurs concurrents",
      "Privilégier ses intérêts plutôt que ceux du client",
      "Refuser un client familial",
      "Négocier sa commission"
    ],
    "answer": "b",
    "justification": "Défini comme privilégier ses intérêts au détriment du client.",
    "page": 6
  },
  {
    "question": "Un représentant doit-il divulguer ses honoraires supplémentaires ?",
    "options": [
      "Uniquement si le client demande",
      "Oui, avant la transaction",
      "Après signature du contrat",
      "Non, inclus dans la prime"
    ],
    "answer": "b",
    "justification": "Article 22 : information préalable obligatoire sur tous frais supplémentaires.",
    "page": 8
  },
  {
    "question": "Que risque un représentant qui utilise l'argent des primes pour ses dettes personnelles ?",
    "options": [
      "Aucun risque si remboursé rapidement",
      "Simple avertissement",
      "Manquement à l'article 37.8°",
      "Perte de certification automatique"
    ],
    "answer": "c",
    "justification": "Utilisation personnelle de fonds confiés = manquement grave.",
    "page": 14
  },
  {
    "question": "Peut-on dénigrer un confrère auprès d'un client ?",
    "options": [
      "Oui si c'est vérifié",
      "Uniquement en privé",
      "Non, strictement interdit",
      "Oui avec preuves écrites"
    ],
    "answer": "c",
    "justification": "Article 31 : interdiction de dénigrer un autre représentant.",
    "page": 11
  },
  {
    "question": "Quand un représentant doit-il refuser un mandat ?",
    "options": [
      "Quand la prime est trop faible",
      "S'il dépasse ses compétences",
      "Pour un client difficile",
      "Si l'assureur impose des conditions"
    ],
    "answer": "b",
    "justification": "Article 17 : obligation de refuser si incompétent sur le sujet.",
    "page": 7
  },
  {
    "question": "Que doit faire un représentant découvrant une erreur dans un dossier ?",
    "options": [
      "Corriger discrètement",
      "Aviser immédiatement le client et son assureur",
      "Attendre l'audit annuel",
      "Rien si non détectée"
    ],
    "answer": "b",
    "justification": "Article 20 : obligation d'avis immédiat.",
    "page": 8
  },
  {
    "question": "Un courtier doit-il offrir des produits d'au moins trois assureurs ?",
    "options": [
      "Toujours",
      "Uniquement pour les entreprises",
      "À partir de décembre 2019 pour certains produits",
      "Jamais"
    ],
    "answer": "c",
    "justification": "Modification réglementaire effective depuis décembre 2019.",
    "page": 5
  },
  {
    "question": "Peut-on garder des documents clients en garantie de paiement ?",
    "options": [
      "Oui, temporairement",
      "Non, strictement interdit",
      "Uniquement avec accord écrit",
      "Oui pour les originaux"
    ],
    "answer": "b",
    "justification": "Article 26.1 : interdiction formelle.",
    "page": 9
  },
  {
    "question": "Qui est considéré comme mandataire de l'assuré dans certaines circonstances ?",
    "options": [
      "L'agent exclusif",
      "Le courtier",
      "Le souscripteur",
      "L'expert en sinistre"
    ],
    "answer": "b",
    "justification": "Le courtier agit parfois comme mandataire de l'assuré.",
    "page": 5
  },
  {
    "question": "Que doit faire un représentant convoqué par le syndic ?",
    "options": [
      "Ignorer la convocation",
      "Se faire représenter par un avocat",
      "Se présenter obligatoirement",
      "Contacter le plaignant"
    ],
    "answer": "c",
    "justification": "Article 34.1 : obligation de se présenter.",
    "page": 12
  },
  {
    "question": "Quelle attitude adopter envers les assureurs ?",
    "options": [
      "Transparence et exactitude",
      "Négociation agressive",
      "Protection prioritaire du client",
      "Transmission sélective d'infos"
    ],
    "answer": "a",
    "justification": "Article 27 : interdiction de représentations trompeuses.",
    "page": 10
  },
  {
    "question": "Un représentant en burnout qui commet des erreurs viole :",
    "options": [
      "Article 17 sur les compétences",
      "Article 37.2° sur l'état physique",
      "Article 10 sur les conflits",
      "Aucun article"
    ],
    "answer": "b",
    "justification": "L'état physique/mental altéré constitue un manquement.",
    "page": 15
  },
  {
    "question": "Peut-on rémunérer un non-représentant pour obtenir des clients ?",
    "options": [
      "Oui sous forme de cadeaux",
      "Non, strictement interdit",
      "Oui si déclaré à la ChAD",
      "Uniquement en espèces"
    ],
    "answer": "b",
    "justification": "Article 6 : interdiction de rémunérer pour acquisition de clientèle.",
    "page": 6
  },
  {
    "question": "Que couvre la Section III du Code ?",
    "options": [
      "Devoirs envers les assureurs",
      "Devoirs envers les clients",
      "Règles de publicité",
      "Gestion des conflits"
    ],
    "answer": "b",
    "justification": "Section III consacrée aux obligations envers le client.",
    "page": 7
  },
  {
    "question": "Un représentant doit-il protéger les informations clients ?",
    "options": [
      "Uniquement les données financières",
      "Non si anonymisées",
      "Oui, secret professionnel absolu",
      "Oui sauf demande administrative"
    ],
    "answer": "c",
    "justification": "Articles 23-24 : obligation de confidentialité stricte.",
    "page": 9
  },
  {
    "question": "Que risque un client faisant une fausse déclaration conseillée par son représentant ?",
    "options": [
      "Aucun risque",
      "Majoration de prime",
      "Déchéance du droit à indemnisation",
      "Prison systématique"
    ],
    "answer": "c",
    "justification": "Article 2472 du Code civil du Québec.",
    "page": 14
  },
  {
    "question": "Quel article interdit de dissimuler ses erreurs ?",
    "options": [
      "Article 17",
      "Article 20",
      "Article 31",
      "Article 37"
    ],
    "answer": "b",
    "justification": "Article 20 : interdiction d'utiliser des moyens frauduleux.",
    "page": 8
  },
  {
    "question": "Qui rédige le Code de déontologie ?",
    "options": [
      "Le gouvernement du Québec",
      "L'Autorité des marchés financiers",
      "La Chambre de l'assurance de dommages",
      "Les assureurs regroupés"
    ],
    "answer": "c",
    "justification": "Rédigé par la ChAD pour protéger le public.",
    "page": 3
  },
  {
    "question": "Quelle est la première obligation d'un représentant envers son client ?",
    "options": [
      "Facturer des honoraires raisonnables",
      "Connaître ses limites de compétence",
      "Fournir 3 soumissions",
      "Vérifier sa solvabilité"
    ],
    "answer": "b",
    "justification": "Article 17 : évaluer ses capacités avant d'accepter un mandat.",
    "page": 7
  },
  {
    "question": "Peut-on contacter un plaignant pendant une enquête ?",
    "options": [
      "Oui pour discuter de la plainte",
      "Non, sauf pour exécution du mandat",
      "Oui avec l'accord du syndic",
      "Jamais"
    ],
    "answer": "b",
    "justification": "Article 36 : interdiction sauf pour service professionnel en cours.",
    "page": 13
  },
  {
    "question": "Quel élément justifie des honoraires selon l'article 21 ?",
    "options": [
      "La richesse du client",
      "Le résultat obtenu",
      "La concurrence locale",
      "Le type d'assureur"
    ],
    "answer": "b",
    "justification": "Le résultat obtenu est un critère de fixation des honoraires.",
    "page": 8
  },
  {
    "question": "Un représentant doit-il collaborer à une enquête du syndic ?",
    "options": [
      "Oui, obligatoirement",
      "Uniquement si inculpé",
      "Non, droit au silence",
      "Par avocat interposé"
    ],
    "answer": "a",
    "justification": "Article 34 : obligation de réponse et collaboration.",
    "page": 12
  },
  {
    "question": "Que signifie 'tribunal quasi judiciaire' pour le comité de discipline ?",
    "options": [
      "Compétence criminelle",
      "Procédure similaire aux cours de justice",
      "Décisions sans appel",
      "Juges professionnels"
    ],
    "answer": "b",
    "justification": "Note 353 : procédure judiciaire appliquée.",
    "page": 4
  },
  {
    "question": "Quelle section du Code traite des manquements ?",
    "options": [
      "Section IV",
      "Section VII",
      "Section I",
      "Section V"
    ],
    "answer": "b",
    "justification": "Section VII : liste exhaustive des manquements.",
    "page": 13
  },
  {
    "question": "Un représentant peut-il travailler avec un non-certifié ?",
    "options": [
      "Oui sous supervision",
      "Non, strictement interdit",
      "Oui pour tâches administratives",
      "Uniquement en formation"
    ],
    "answer": "b",
    "justification": "Article 37.12° : interdiction absolue.",
    "page": 15
  },
  {
    "question": "Quelle qualité doit manifester un représentant dans sa conduite ?",
    "options": [
      "Ambition",
      "Dignité",
      "Fermeté",
      "Innovation"
    ],
    "answer": "b",
    "justification": "Article 14 : objectivité, discrétion, modération, dignité.",
    "page": 7
  },
  {
    "question": "Que doit faire un représentant découvrant un conflit d'intérêts ?",
    "options": [
      "Le déclarer à l'assureur",
      "L'ignorer s'il est minime",
      "L'éviter immédiatement",
      "Négocier une dérogation"
    ],
    "answer": "c",
    "justification": "Article 10 : obligation d'évitement.",
    "page": 6
  },
  {
    "question": "Qui perçoit généralement les primes pour le compte de l'assureur ?",
    "options": [
      "L'expert en sinistre",
      "Le souscripteur",
      "Le représentant",
      "Le trésorier"
    ],
    "answer": "c",
    "justification": "Article 28 : obligation de versement des primes perçues.",
    "page": 11
  },
  {
    "question": "Quel article interdit les plaintes malicieuses contre un confrère ?",
    "options": [
      "Article 30",
      "Article 33",
      "Article 35",
      "Article 37"
    ],
    "answer": "b",
    "justification": "Article 33 : interdiction expresse.",
    "page": 11
  },
  {
    "question": "Que doit faire un représentant empêché de continuer un mandat ?",
    "options": [
      "Trouver un remplaçant",
      "Aviser immédiatement le client",
      "Attendre une relance",
      "Rembourser les honoraires"
    ],
    "answer": "b",
    "justification": "Article 26 : information prompte au client.",
    "page": 9
  },
  {
    "question": "Quelle instance reçoit les plaintes contre les petits cabinets ?",
    "options": [
      "Uniquement l'Autorité",
      "Uniquement la ChAD",
      "Le tribunal civil",
      "Les deux selon la taille"
    ],
    "answer": "b",
    "justification": "Note 352 : cabinets ≤24 représentants → ChAD.",
    "page": 3
  },
  {
    "question": "Quel élément ne définit PAS un conflit d'intérêts ?",
    "options": [
      "Privilégier ses intérêts",
      "Obtenir un avantage personnel",
      "Travailler avec un parent",
      "Affecter son jugement"
    ],
    "answer": "c",
    "justification": "Article 10 : les éléments a, b et d sont inclus mais pas c.",
    "page": 6
  },
  {
    "question": "Comment doit être déposée une plainte ?",
    "options": [
      "Orale avec témoin",
      "Écrite avec preuves",
      "Par courriel anonyme",
      "Via l'employeur"
    ],
    "answer": "b",
    "justification": "Doit être écrite et accompagnée de documents.",
    "page": 3
  },
  {
    "question": "Quelle est la mission principale du Code de déontologie ?",
    "options": [
      "Augmenter les profits",
      "Protéger le public",
      "Réduire les primes",
      "Faciliter les transactions"
    ],
    "answer": "b",
    "justification": "Objectif premier : protection du public.",
    "page": 3
  },
  {
    "question": "Un représentant doit-il soutenir l'éducation dans son domaine ?",
    "options": [
      "Uniquement si payant",
      "Non, sans obligation",
      "Oui, activement",
      "Oui mais discrètement"
    ],
    "answer": "c",
    "justification": "Article 13 : obligation de soutien.",
    "page": 7
  },
  {
    "question": "Que viole un représentant qui ment à un assureur ?",
    "options": [
      "Article 15",
      "Article 27",
      "Article 31",
      "Article 37.7°"
    ],
    "answer": "b",
    "justification": "Article 27 : interdiction de représentations trompeuses envers les assureurs.",
    "page": 10
  },
  {
    "question": "Quel article impose la transparence sur les frais supplémentaires ?",
    "options": [
      "Article 18",
      "Article 22",
      "Article 26",
      "Article 29"
    ],
    "answer": "b",
    "justification": "Article 22 : divulgation obligatoire des frais hors prime.",
    "page": 8
  },
  {
    "question": "Qui enquête sur les plaintes déposées à la ChAD ?",
    "options": [
      "Le comité de discipline",
      "Le syndic",
      "L'Autorité des marchés",
      "La police financière"
    ],
    "answer": "b",
    "justification": "Rôle du syndic d'enquêter sur les plaintes.",
    "page": 3
  },
  {
    "question": "Que doit faire un représentant recevant de l'argent pour une prime ?",
    "options": [
      "Le verser sous 30 jours",
      "L'utiliser si besoin personnel urgent",
      "Le verser immédiatement à l'assureur",
      "Le placer en compte épargne"
    ],
    "answer": "c",
    "justification": "Article 28 : interdiction de détournement.",
    "page": 11
  },
  {
    "question": "Quelle qualité prime dans les relations entre représentants ?",
    "options": [
      "Compétitivité",
      "Loyauté",
      "Efficacité",
      "Créativité"
    ],
    "answer": "b",
    "justification": "Article 32 : loyauté et bonne foi exigées.",
    "page": 11
  },
  {
    "question": "Un représentant peut-il refuser de remettre des documents au client ?",
    "options": [
      "Oui si prime impayée",
      "Non, jamais",
      "Oui pour originaux seulement",
      "Oui pendant 30 jours"
    ],
    "answer": "b",
    "justification": "Article 26.1 : interdiction absolue de retenir des documents.",
    "page": 9
  },
  {
    "question": "Quel comportement est acceptable envers un assureur ?",
    "options": [
      "Cacher des risques",
      "Exagérer le potentiel client",
      "Fournir tous les renseignements usuels",
      "Promettre des économies irréalistes"
    ],
    "answer": "c",
    "justification": "Article 29 : obligation d'information complète.",
    "page": 10
  },
  {
    "question": "Que couvre la Section V du Code ?",
    "options": [
      "Devoirs envers les clients",
      "Devoirs envers les autres représentants",
      "Relations avec la ChAD",
      "Rémunération"
    ],
    "answer": "b",
    "justification": "Section V : obligations envers les pairs.",
    "page": 11
  },
  {
    "question": "Quelle est la pire sanction pour un manquement ?",
    "options": [
      "Amende maximale",
      "Radiation pure et simple",
      "Suspension à vie",
      "Travail d'intérêt général"
    ],
    "answer": "b",
    "justification": "Le comité peut imposer la radiation.",
    "page": 4
  },
  {
    "question": "Un représentant doit-il divulguer spontanément des informations au client ?",
    "options": [
      "Uniquement sur demande",
      "Oui, sans délai",
      "Seulement si cruciales",
      "Non, secret professionnel"
    ],
    "answer": "b",
    "justification": "Article 25 : divulgation proactive obligatoire.",
    "page": 9
  },
  {
    "question": "Qui est tenu de respecter la LDPSF selon l'article 2 ?",
    "options": [
      "Le représentant uniquement",
      "Le représentant et ses employés",
      "L'assureur seulement",
      "Le cabinet de courtage"
    ],
    "answer": "b",
    "justification": "Obligation étendue aux mandataires et employés.",
    "page": 4
  },
  {
    "question": "Quelle attitude est requise dans l'exécution d'un mandat ?",
    "options": [
      "Rapidité",
      "Probité",
      "Indépendance",
      "Innovation"
    ],
    "answer": "b",
    "justification": "Article 37.5° : probité exigée.",
    "page": 15
  },
  {
    "question": "Un représentant peut-il conseiller un geste frauduleux ?",
    "options": [
      "Oui pour protéger le client",
      "Non, strictement interdit",
      "Oui si mineur",
      "Uniquement par oral"
    ],
    "answer": "b",
    "justification": "Article 37.11° : interdiction absolue.",
    "page": 14
  },
  {
    "question": "Quelle section traite des devoirs envers l'Autorité et la ChAD ?",
    "options": [
      "Section IV",
      "Section VI",
      "Section II",
      "Section VII"
    ],
    "answer": "b",
    "justification": "Section VI : obligations envers les organismes.",
    "page": 12
  },
  {
    "question": "Que doit éviter un représentant dans sa publicité ?",
    "options": [
      "Mentions légales",
      "Comparaisons",
      "Représentations trompeuses",
      "Témoignages clients"
    ],
    "answer": "c",
    "justification": "Article 16 : interdiction de fausses représentations.",
    "page": 7
  },
  {
    "question": "Quel organisme a rédigé le Code de déontologie des experts en sinistre?",
    "answer": "La Chambre de l'assurance de dommages (ChAD)",
    "page": 275
  },
  {
    "question": "Quelle est la mission principale confiée à la ChAD?",
    "answer": "Assurer la protection du public en matière d'expertise en règlement de sinistres",
    "page": 275
  },
  {
    "question": "Où un particulier peut-il porter plainte contre un expert en sinistre?",
    "answer": "Auprčs de la ChAD ou de l'Autorité des marchés financiers selon le cas",
    "page": 275
  },
  {
    "question": "Qui est chargé d'enquęter sur les plaintes contre les experts?",
    "answer": "Le syndic de la ChAD",
    "page": 275
  },
  {
    "question": "Que risque un expert reconnu coupable par le comité de discipline?",
    "answer": "Sanctions allant de la réprimande ŕ la radiation, avec amendes possibles",
    "page": 276
  },
  {
    "question": "Combien de sections comporte le Code de déontologie?",
    "answer": "Huit sections",
    "page": 276
  },
  {
    "question": "Selon l'article 3 du Code, ŕ qui un expert ne peut-il pas verser de rémunération?",
    "answer": "Ŕ une personne sans certification de représentant",
    "page": 277
  },
  {
    "question": "Qu'est-ce qu'un conflit d'intéręts selon l'article 9?",
    "answer": "Situation oů les intéręts personnels pourraient affecter le jugement ou la loyauté envers le mandat",
    "page": 278
  },
  {
    "question": "Quelles qualités un expert doit-il montrer dans sa conduite selon l'article 15?",
    "answer": "Dignité, discrétion, objectivité et modération",
    "page": 279
  },
  {
    "question": "Quelle information cruciale doit ętre communiquée ŕ l'assuré selon l'article 18?",
    "answer": "L'arrivée prochaine d'une date de prescription",
    "page": 280
  },
  {
    "question": "Que doit protéger l'expert selon les articles 22-24?",
    "answer": "La confidentialité des renseignements personnels",
    "page": 280
  },
  {
    "question": "Que doit faire un expert avant d'accepter un mandat selon l'article 26?",
    "answer": "S'assurer d'avoir les compétences requises ou le soutien nécessaire",
    "page": 281
  },
  {
    "question": "Un expert peut-il représenter ŕ la fois l'assureur et l'assuré?",
    "answer": "Non, selon l'article 28",
    "page": 282
  },
  {
    "question": "Que doit faire l'expert s'il découvre des informations compromettantes?",
    "answer": "Aviser promptement le mandant (article 31)",
    "page": 282
  },
  {
    "question": "Quels facteurs doivent ętre considérés pour fixer la rémunération selon l'article 39?",
    "answer": "Expérience, temps consacré, difficulté, importance, responsabilité, services exceptionnels, résultat",
    "page": 283
  },
  {
    "question": "Quand un expert peut-il demander une avance sur honoraires?",
    "answer": "Seulement dans des cas exceptionnels",
    "page": 283
  },
  {
    "question": "Que ne peut pas faire un expert avec les biens du sinistré selon l'article 44?",
    "answer": "Les retenir sans autorisation légale",
    "page": 283
  },
  {
    "question": "Que doit faire l'expert avec les biens qui lui sont confiés selon l'article 45?",
    "answer": "Leur apporter un soin raisonnable et ne pas s'en départir sans approbation",
    "page": 283
  },
  {
    "question": "Que doit vérifier l'expert concernant les biens sinistrés selon l'article 47?",
    "answer": "Les droits de propriété ou de créance sur les biens",
    "page": 284
  },
  {
    "question": "Que ne doit pas faire un expert envers d'autres représentants selon l'article 50?",
    "answer": "Les dénigrer, dévaloriser ou discréditer",
    "page": 284
  },
  {
    "question": "Quelle obligation a l'expert envers le syndic selon l'article 54?",
    "answer": "Répondre rapidement ŕ toute correspondance",
    "page": 286
  },
  {
    "question": "Que ne doit pas faire l'expert lors d'une enquęte selon l'article 56?",
    "answer": "Entraver le travail des enquęteurs ou dissimuler des faits/documents",
    "page": 287
  },
  {
    "question": "Quel est le principal manquement selon l'article 58(1°)?",
    "answer": "Exercer ses activités de façon malhonnęte ou négligente",
    "page": 288
  },
  {
    "question": "Que ne doit pas conseiller un expert selon l'article 58(11°)?",
    "answer": "Un acte illégal ou frauduleux",
    "page": 289
  },
  {
    "question": "Quelle est la sanction pour appropriation de fonds selon l'article 58(16°)?",
    "answer": "Radiation temporaire au minimum",
    "page": 290
  },
  {
    "question": "Quel article interdit de rémunérer des non-représentants?",
    "answer": "Article 3",
    "page": 277
  },
  {
    "question": "Quel article traite des conflits d'intéręts?",
    "answer": "Article 9",
    "page": 278
  },
  {
    "question": "Quel article exige d'identifier son mandant sur place?",
    "answer": "Article 17",
    "page": 280
  },
  {
    "question": "Quel article oblige ŕ informer sur les dates de prescription?",
    "answer": "Article 18",
    "page": 280
  },
  {
    "question": "Quel article impose la confidentialité des données?",
    "answer": "Article 22",
    "page": 280
  },
  {
    "question": "Quel article interdit la double représentation?",
    "answer": "Article 28",
    "page": 282
  },
  {
    "question": "Quel article régit la rémunération?",
    "answer": "Article 39",
    "page": 283
  },
  {
    "question": "Quel article interdit de retenir les biens du sinistré?",
    "answer": "Article 44",
    "page": 283
  },
  {
    "question": "Quel article oblige ŕ vérifier les droits de propriété?",
    "answer": "Article 47",
    "page": 284
  },
  {
    "question": "Quel article interdit les plaintes malicieuses?",
    "answer": "Article 53",
    "page": 286
  },
  {
    "question": "Quel article exige de collaborer avec le syndic?",
    "answer": "Article 56",
    "page": 287
  },
  {
    "question": "Que signifie 'moyen dolosif'?",
    "answer": "Tromperie visant ŕ amener une personne ŕ poser un acte qui lui est défavorable",
    "page": 283
  },
  {
    "question": "Qu'est-ce qu'un 'décoursé'?",
    "answer": "Dépenses engagées par le professionnel pour le dossier",
    "page": 283
  },
  {
    "question": "Quelle loi encadre l'utilisation des renseignements personnels?",
    "answer": "LDPSF (articles 92-93)",
    "page": 280
  },
  {
    "question": "Que doit faire l'expert en cas d'erreur?",
    "answer": "Aviser le mandant et son assureur de responsabilité professionnelle (article 38)",
    "page": 283
  },
  {
    "question": "Que doit contenir une facture horaire?",
    "answer": "Détail du temps consacré ŕ chaque acte et modalités de paiement",
    "page": 284
  },
  {
    "question": "Quand un expert peut-il cesser un mandat?",
    "answer": "Avec motif juste et raisonnable aprčs avoir évité tout préjudice (article 36)",
    "page": 282
  },
  {
    "question": "Que doit faire l'expert en cas d'empęchement?",
    "answer": "Informer le mandant, l'assuré et la partie adverse (article 58(12°))",
    "page": 289
  },
  {
    "question": "Que ne peut pas faire l'expert avec les preuves?",
    "answer": "Les retenir, dérober, receler, falsifier, mutiler ou détruire (article 58(8°))",
    "page": 289
  },
  {
    "question": "Qu'est-il interdit de faire avec un témoin?",
    "answer": "Le payer pour une fausse déclaration (article 58(7°))",
    "page": 289
  },
  {
    "question": "Quelle attitude doit avoir l'expert dans sa clientčle?",
    "answer": "Sollicitation modérée et digne, sans pression (article 58(13°))",
    "page": 289
  },
  {
    "question": "Que doit faire l'expert avec les avances reçues?",
    "answer": "Les conserver dans un compte séparé et rembourser les sommes non utilisées",
    "page": 283
  },
  {
    "question": "Quel est le montant minimal obligatoire de l'assurance responsabilité automobile selon la LAA ?",
    "answer": "50 000 $",
    "reference": "Page 32 (art. 87 LAA)"
  },
  {
    "question": "Combien de jours avant l'échéance un assureur doit-il aviser l'assuré pour ne pas renouveler un contrat d'assurance automobile ?",
    "answer": "30 jours",
    "reference": "Page 33 (art. 90 LAA)"
  },
  {
    "question": "Quel délai de prescription s'applique à la plupart des droits d'action en responsabilité civile au Québec ?",
    "answer": "3 ans",
    "reference": "Page 22 (art. 2925 C.c.Q.)"
  },
  {
    "question": "Quel montant maximal permet encore la preuve testimoniale pour un contrat sans commencement de preuve écrit ?",
    "answer": "1 500 $",
    "reference": "Page 14 (art. 2862 C.c.Q.)"
  },
  {
    "question": "Dans quel délai une municipalité doit-elle être avisée d'une intention de recours pour dommages matériels ?",
    "answer": "15 jours",
    "reference": "Page 22 (note 24)"
  },
  {
    "question": "À quelle fréquence le coût de reconstruction d'une copropriété doit-il être évalué par un expert ?",
    "answer": "Tous les 5 ans",
    "reference": "Page 12"
  },
  {
    "question": "Quel est le montant personnel à payer si des dommages de 70 000 $ sont causés avec une couverture responsabilité de 50 000 $ ?",
    "answer": "20 000 $",
    "reference": "Page 53 (Réponse 5)"
  },
  {
    "question": "Quel délai une entreprise a-t-elle pour répondre à une demande d'accès aux renseignements personnels ?",
    "answer": "30 jours",
    "reference": "Page 27 (art. 27-41 LPRPSP)"
  },
  {
    "question": "Quelle est la durée de validité minimale d'un mandat en cas d'inaptitude avant homologation ?",
    "answer": "Aucune durée (doit être homologué après l'inaptitude)",
    "reference": "Page 19 (art. 2166 C.c.Q.)"
  },
  {
    "question": "Quel montant de franchise est considéré comme potentiellement déraisonnable pour une copropriété ?",
    "answer": "Non spécifié (critères à définir par règlement)",
    "reference": "Page 12"
  },
  {
    "question": "Quel délai s'applique pour intenter un recours en diffamation ?",
    "answer": "1 an",
    "reference": "Page 22 (art. 2929 C.c.Q.)"
  },
  {
    "question": "Depuis quelle année le Code civil du Québec est-il en vigueur ?",
    "answer": "1994",
    "reference": "Page 5"
  },
  {
    "question": "Quel pourcentage de la succession revient au conjoint survivant dans une succession légale sans testament ?",
    "answer": "Un tiers (1/3)",
    "reference": "Page 9 (art. 566 C.c.Q.)"
  },
  {
    "question": "Quel montant minimal doit être versé au fonds d'auto-assurance des copropriétés ?",
    "answer": "Non spécifié (à déterminer par règlement)",
    "reference": "Page 12"
  },
  {
    "question": "Combien de livres comporte le Code civil du Québec ?",
    "answer": "10 livres",
    "reference": "Page 5"
  },
  {
    "question": "Depuis quelle année les conjoints de même sexe peuvent-ils se marier au Canada ?",
    "answer": "2005",
    "reference": "Page 8"
  },
  {
    "question": "Quel est le montant des dommages dans l'exemple où Marcel endommage le fauteuil de son voisin ?",
    "answer": "300 $",
    "reference": "Page 17"
  },
  {
    "question": "Quel délai court après la première manifestation d'un préjudice corporel latent pour la prescription ?",
    "answer": "3 ans à partir de la première manifestation",
    "reference": "Page 22 (art. 2926 C.c.Q.)"
  },
  {
    "question": "Quel montant de dette est réclamé dans l'exemple de la société en nom collectif (Tremblay et Bernard) ?",
    "answer": "2 000 $",
    "reference": "Page 6"
  },
  {
    "question": "Quelle durée de prescription s'applique aux recours contre les municipalités pour dommages matériels ?",
    "answer": "8 mois",
    "reference": "Page 22 (note 24)"
  },
 {
  "questions": [
    {
      "question": "Selon l'article 2469 C.c.Q., à partir de quand l'assureur a-t-il droit à la prime?",
      "type": "qcm",
      "options": [
        "Dès la signature du contrat",
        "À compter du moment où le risque commence",
        "Après la première déclaration de sinistre",
        "Au moment du renouvellement annuel"
      ],
      "answer": "À compter du moment où le risque commence"
    },
    {
      "question": "Quel est le délai de prescription pour un recours en dommages corporels résultant d'une agression sexuelle selon l'art. 2926.1 C.c.Q.?",
      "type": "numerique",
      "answer": 30
    },
    {
      "question": "Vrai ou Faux : Un assureur peut invoquer des conditions non écrites dans le contrat selon l'article 2403 C.c.Q.",
      "type": "vrai_faux",
      "answer": "Faux"
    },
    {
      "question": "Quel montant maximum peut être réclamé pour des dommages punitifs selon l'art. 1621 C.c.Q.?",
      "type": "qcm",
      "options": [
        "Le double du préjudice subi",
        "Ce qui est suffisant pour assurer leur fonction préventive",
        "10 fois le montant des primes payées",
        "5% du chiffre d'affaires de l'assureur"
      ],
      "answer": "Ce qui est suffisant pour assurer leur fonction préventive"
    },
    {
      "question": "Combien de jours l'assureur a-t-il pour indemniser un assuré après sinistre selon l'art. 2473 C.c.Q.?",
      "type": "numerique",
      "answer": 60
    },
    {
      "question": "Quelle est la durée de la prescription extinctive pour un droit réel immobilier?",
      "type": "qcm",
      "options": [
        "1 an",
        "3 ans",
        "5 ans",
        "10 ans"
      ],
      "answer": "10 ans"
    },
    {
      "question": "Si un sinistre survient le 15 mars, quand expire le délai de 3 ans pour intenter une action?",
      "type": "date",
      "answer": "16 mars + 3 ans"
    },
    {
      "question": "Quel pourcentage de responsabilité peut être imputé à une victime pour faute contributive?",
      "type": "qcm",
      "options": [
        "Maximum 25%",
        "Maximum 50%",
        "Jusqu'à 100% selon la gravité",
        "Aucune limite légale"
      ],
      "answer": "Jusqu'à 100% selon la gravité"
    },
    {
      "question": "Quelle prime doit payer un preneur pour un risque 'très élevé' selon les principes actuariels?",
      "type": "qcm",
      "options": [
        "Une prime symbolique",
        "Une prime proportionnellement plus importante",
        "Le double de la prime standard",
        "Aucune prime n'est exigée"
      ],
      "answer": "Une prime proportionnellement plus importante"
    },
    {
      "question": "Combien d'années dure la garantie légale implicite pour un téléviseur acheté en juillet selon la LPC?",
      "type": "qcm",
      "options": [
        "1 an",
        "3 ans",
        "Durée raisonnable selon le prix",
        "5 ans minimum"
      ],
      "answer": "Durée raisonnable selon le prix"
    },
    {
      "question": "Vrai ou Faux : Les dommages moratoires sont dus même sans preuve de préjudice lié au retard.",
      "type": "vrai_faux",
      "answer": "Vrai"
    },
    {
      "question": "Quel montant d'intérêts moratoires s'applique en l'absence de convention entre les parties?",
      "type": "qcm",
      "options": [
        "Taux bancaire courant",
        "Taux légal fixé par le législateur",
        "5% annuel",
        "Aucun intérêt n'est dû"
      ],
      "answer": "Taux légal fixé par le législateur"
    },
    {
      "question": "Si un préjudice corporel se manifeste 90 jours après l'événement causal, quand commence le délai de prescription?",
      "type": "qcm",
      "options": [
        "Date de l'événement causal",
        "Date de la première manifestation",
        "Date du diagnostic médical",
        "Date de la déclaration à l'assureur"
      ],
      "answer": "Date de la première manifestation"
    },
    {
      "question": "Combien de jours ouvre-t-on pour dénoncer un vice caché selon l'art. 1739 C.c.Q.?",
      "type": "qcm",
      "options": [
        "15 jours",
        "30 jours",
        "Délai raisonnable",
        "1 an"
      ],
      "answer": "Délai raisonnable"
    },
    {
      "question": "Quelle somme maximale peut réclamer un créancier hypothécaire en cas de sinistre total?",
      "type": "qcm",
      "options": [
        "Le montant du prêt impayé",
        "La valeur de reconstruction",
        "La valeur marchande du bien",
        "Le montant assuré"
      ],
      "answer": "Le montant du prêt impayé"
    },
    {
      "question": "Vrai ou Faux : Un mineur de 15 ans peut souscrire seul une assurance responsabilité professionnelle pour son entreprise.",
      "type": "vrai_faux",
      "answer": "Vrai"
    },
    {
      "question": "Quel délai de prescription s'applique à une action en diffamation?",
      "type": "numerique",
      "answer": 1
    },
    {
      "question": "Combien coûte la prime d'assurance pour un risque statistiquement nul?",
      "type": "qcm",
      "options": [
        "Prime standard",
        "Prime majorée de 50%",
        "Aucune prime n'est exigée",
        "Le contrat est nul"
      ],
      "answer": "Le contrat est nul"
    },
    {
      "question": "Quel montant d'indemnité peut réclamer un assuré en cas de perte totale d'un bien assuré?",
      "type": "qcm",
      "options": [
        "Valeur à neuf",
        "Valeur de remplacement",
        "Valeur réelle au moment du sinistre",
        "Montant de la prime multiplié par 10"
      ],
      "answer": "Valeur réelle au moment du sinistre"
    },
    {
      "question": "Si un sinistre survient le 1er janvier 2023, quelle est la date limite pour intenter une action en responsabilité civile?",
      "type": "date",
      "answer": "2 janvier 2026"
    },
    {
      "question": "Selon l'article 2398 C.c.Q., à quel moment le contrat d'assurance est-il formé?",
      "answer": "Dès que l'assureur accepte la proposition du preneur",
      "type": "droit_formation"
    },
    {
      "question": "Un contrat d'assurance provisoire (note de couverture) peut généralement offrir une protection pendant combien de jours?",
      "answer": "30 à 60 jours",
      "type": "duree_contractuelle"
    },
    {
      "question": "Quelle sanction s'applique si un preneur de bonne foi omet de déclarer une circonstance importante influençant le risque, et que l'assureur prouve qu'il aurait augmenté la prime?",
      "answer": "Réduction proportionnelle de l'indemnité selon le rapport prime perçue/prime due",
      "type": "sanction_declaration"
    },
    {
      "question": "Dans un contrat d'assurance habitation avec franchise de 500$ et dommages évalués à 3,000$, quel montant l'assureur paiera-t-il?",
      "answer": "2,500$",
      "type": "calcul_franchise"
    },
    {
      "question": "Quel article du C.c.Q. interdit à l'assureur d'être subrogé contre les membres de la maison de l'assuré?",
      "answer": "Article 2474 alinéa 2",
      "type": "droit_subrogation"
    },
    {
      "question": "Si un sinistre survient pendant une période de suspension de garantie due au non-respect d'un engagement formel, quelle est la conséquence?",
      "answer": "L'assuré perd tout droit à indemnisation pour ce sinistre",
      "type": "effet_suspension"
    },
    {
      "question": "En assurance automobile, quel est le délai minimal de préavis pour une résiliation émanant de l'assureur après les 60 premiers jours?",
      "answer": "30 jours",
      "type": "delai_resiliation"
    },
    {
      "question": "Quelle méthode d'évaluation utilise-t-on dans un contrat à valeur indéterminée si les parties n'ont rien prévu?",
      "answer": "La manière habituelle (ex: valeur de remplacement dépréciée)",
      "type": "evaluation_pertes"
    },
    {
      "question": "Selon l'article 2468 C.c.Q., l'inoccupation d'une résidence principale pendant moins de combien de jours ne constitue PAS une aggravation de risque?",
      "answer": "30 jours",
      "type": "delai_aggravation"
    },
    {
      "question": "Un assureur doit payer l'indemnité au plus tard dans quel délai après réception de la déclaration de sinistre complète?",
      "answer": "60 jours",
      "type": "delai_paiement"
    },
    {
      "question": "Quelle est la sanction pour une déclaration mensongère volontaire sur des biens mobiliers dans une réclamation?",
      "answer": "Déchéance du droit à indemnité pour la catégorie de biens concernée",
      "type": "sanction_fraude"
    },
    {
      "question": "Dans un contrat à valeur agréée, quand l'évaluation des biens est-elle fixée?",
      "answer": "Lors de la conclusion du contrat",
      "type": "valeur_agreée"
    },
    {
      "question": "Si la valeur réelle d'un bien assuré est de 200,000$ mais que le montant d'assurance n'est que de 150,000$, comment se calcule l'indemnité pour une perte partielle de 50,000$?",
      "answer": "(150,000 / 200,000) × 50,000$ = 37,500$",
      "type": "calcul_sous-assurance"
    },
    {
      "question": "Quel recours possède une victime directement contre l'assureur de responsabilité civile selon l'article 2501 C.c.Q.?",
      "answer": "Action directe contre l'assureur sans passer par l'assuré responsable",
      "type": "droit_victime"
    },
    {
      "question": "Combien de temps l'assureur a-t-il pour aviser clairement l'assuré d'une modification défavorable lors d'un renouvellement?",
      "answer": "Doit être indiqué dans un document distinct avant le renouvellement",
      "type": "obligation_renouvellement"
    },
    {
      "question": "Quelle est la conséquence si l'assuré conclut une transaction avec une victime sans l'accord de son assureur?",
      "answer": "La transaction n'est pas opposable à l'assureur",
      "type": "effet_transaction"
    },
    {
      "question": "Quel principe interdit à un contrat d'assurance de prévoir un délai de paiement supérieur à 60 jours?",
      "answer": "Caractère d'ordre public des dispositions protectrices (art. 2414 C.c.Q.)",
      "type": "droit_ordre_public"
    },
    {
      "question": "Pour une police d'assurance habitation avec trois assureurs (A: 100,000$, B: 100,000$, C: 50,000$) et un sinistre de 150,000$, quelle est la contribution de l'assureur C?",
      "answer": "(50,000 / 250,000) × 150,000$ = 30,000$",
      "type": "calcul_pluralite"
    },
    {
      "question": "Quelle condition permet à un créancier hypothécaire de bénéficier de l'immunité contre la faute intentionnelle de l'assuré?",
      "answer": "Avoir une clause de garantie hypothécaire notifiée à l'assureur",
      "type": "droit_creancier"
    },
    {
      "question": "Quelle est la durée maximale autorisée pour la présence de travailleurs dans une résidence sans déclaration d'aggravation de risque?",
      "answer": "30 jours (art. 2468 al. 2 C.c.Q.)",
      "type": "delai_travailleurs"
    },
    {
      "question": "Quel article du C.c.Q. prévoit que la prime est exigible au commencement du risque couvert?",
      "answer": "Article 2469",
      "type": "exigibilite_prime"
    },
    {
      "question": "Quelle méthode d'évaluation correspond à 'Valeur de remplacement sans dépréciation'?",
      "answer": "Valeur à neuf",
      "type": "terminologie_evaluation"
    },
    {
      "question": "Dans quel cas l'assureur peut-il légalement refuser de défendre son assuré en responsabilité civile?",
      "answer": "Si la poursuite est exclusivement fondée sur une faute intentionnelle alléguée",
      "type": "obligation_defense"
    },
    {
      "question": "Quel montant l'assureur doit-il rembourser si un contrat est annulé pour fausse déclaration après 6 mois d'une prime annuelle de 1,200$?",
      "answer": "Intégralité des 1,200$ (car nullité rétroactive)",
      "type": "calcul_remboursement"
    },
    {
      "question": "Quelle est la sanction pour non-respect de l'obligation d'aviser promptement d'un sinistre si l'assureur prouve un préjudice?",
      "answer": "Déchéance du droit à indemnité (sous réserve de clause expresse)",
      "type": "sanction_retard"
    },
    {
      "question": "Quel type de faute de l'assuré entraîne systématiquement la nullité du contrat d'assurance?",
      "answer": "Surévaluation frauduleuse de la valeur des biens (art. 2492 C.c.Q.)",
      "type": "nullite_contractuelle"
    },
    {
      "question": "Quelle règle s'applique si la police d'assurance omet une clause expressément demandée dans la proposition?",
      "answer": "La proposition prévaut (art. 2400 al. 2 C.c.Q.)",
      "type": "divergence_police"
    },
    {
      "question": "Quel délai de prescription s'applique à l'action en subrogation de l'assureur contre un tiers responsable?",
      "answer": "Court à partir du fait dommageable (pas du paiement de l'indemnité)",
      "type": "prescription_subrogation"
    },
    {
      "question": "Dans un contrat d'assurance de responsabilité, à qui l'indemnité est-elle affectée selon l'art. 2500 C.c.Q.?",
      "answer": "Exclusivement au paiement de la victime",
      "type": "destination_indemnite"
    },
   {
    "question": "Quand l'Autorité des marchés financiers a-t-elle été constituée ?",
    "type": "QCM",
    "options": ["1er janvier 2004", "1er février 2004", "1er mars 2004", "1er avril 2004"],
    "answer": "1er février 2004",
    "reference": "Page 3"
  },
  {
    "question": "Quelle est la date de publication de la Directive du CCRRA et des OCRA sur la conduite des activités d'assurance ?",
    "type": "open",
    "answer": "27 septembre 2018",
    "reference": "Page 10"
  },
  {
    "question": "Quel est le montant maximal d'indemnisation que peut verser le Fonds d'indemnisation des services financiers par réclamation ?",
    "type": "QCM",
    "options": ["100 000 $", "150 000 $", "200 000 $", "250 000 $"],
    "answer": "200 000 $",
    "reference": "Page 8"
  },
  {
    "question": "Dans quel délai une réclamation doit-elle être déposée au Fonds d'indemnisation après la connaissance de la fraude ?",
    "type": "true_false",
    "statement": "Le délai est de 6 mois",
    "answer": "Faux",
    "justification": "Le délai est d'un an (art. 2 du Règlement)",
    "reference": "Page 8"
  },
  {
    "question": "Depuis combien d'années le BAC gérait-il la Convention d'adhésion aux formulaires d'assurance habitation au moment de la rédaction du document ?",
    "type": "open",
    "answer": "Plus de 20 ans",
    "reference": "Page 9"
  },
  {
    "question": "Quelle année correspond aux données sur les motifs de plaintes de la ChAD présentées dans le document ?",
    "type": "QCM",
    "options": ["2012", "2013", "2014", "2015"],
    "answer": "2014",
    "reference": "Page 6"
  },
  {
    "question": "En quelle année le projet de loi n°141 a-t-il été adopté ?",
    "type": "open",
    "answer": "2018",
    "reference": "Page 3"
  },
  {
    "question": "Quel organisme peut prolonger le délai de dépôt d'une réclamation au Fonds d'indemnisation ?",
    "type": "QCM",
    "options": ["ChAD", "BAC", "Autorité des marchés financiers", "SIMA-IARD"],
    "answer": "Autorité des marchés financiers",
    "reference": "Page 8"
  },
  {
    "question": "Combien de membres siègent au comité de discipline de la ChAD lors de l'audition d'une plainte ?",
    "type": "numerical",
    "answer": "3",
    "reference": "Page 6"
  },
  {
    "question": "Quelle est la durée maximale initiale pour déposer une réclamation au Fonds d'indemnisation ?",
    "type": "QCM",
    "options": ["3 mois", "6 mois", "1 an", "2 ans"],
    "answer": "1 an",
    "reference": "Page 8"
  },
  {
    "question": "En quelle année le Bureau du surintendant des institutions financières (BSIF) a-t-il été établi ?",
    "type": "open",
    "answer": "1987",
    "reference": "Page 9"
  },
  {
    "question": "Qui finance le Fonds d'indemnisation des services financiers ?",
    "type": "multiple_choice",
    "options": [
      "Gouvernement du Québec",
      "Consommateurs via des taxes",
      "Cabinet et représentants inscrits",
      "Assureurs de dommages"
    ],
    "answer": "Cabinet et représentants inscrits",
    "reference": "Page 7"
  },
  {
    "question": "Quelle est l'année de création du Groupement des assureurs automobiles (GAA) ?",
    "type": "open",
    "answer": "1978",
    "reference": "Page 12"
  },
  {
    "question": "Quel est le montant de la cotisation au Fonds d'indemnisation ?",
    "type": "true_false",
    "statement": "Un montant fixe de 500$ par an",
    "answer": "Faux",
    "justification": "Le montant est variable et déterminé en fonction du risque de la discipline",
    "reference": "Page 7"
  },
  {
    "question": "Combien de motifs de plaintes courants sont listés par la ChAD pour 2014 ?",
    "type": "numerical",
    "answer": "9",
    "reference": "Page 6"
  },
  {
    "question": "En quelle année le Service de conciliation en assurance de dommages (SCAD) a-t-il été établi ?",
    "type": "open",
    "answer": "2002",
    "reference": "Page 13"
  },
  {
    "question": "Quelle est la date limite pour faire appel d'une décision du comité de discipline de la ChAD ?",
    "type": "QCM",
    "options": [
      "15 jours après la décision",
      "30 jours après la décision",
      "60 jours après la décision",
      "Le document ne précise pas de délai"
    ],
    "answer": "Le document ne précise pas de délai",
    "reference": "Page 6"
  },
  {
    "question": "Quelle loi a institué l'Autorité des marchés financiers en 2004 ?",
    "type": "open",
    "answer": "Loi sur l'Autorité des marchés financiers",
    "reference": "Page 3"
  },
  {
    "question": "Quel est le plafond d'indemnisation par réclamation au Fonds d'indemnisation ?",
    "type": "numerical",
    "answer": "200000",
    "unit": "$",
    "reference": "Page 8"
  },
  {
    "question": "Quelle est l'année de fondation du Forum conjoint des autorités de réglementation ?",
    "type": "open",
    "answer": "1999",
    "reference": "Page 11"
  },
  {
    "question": "À partir de quelle date les courtiers hypothécaires sont-ils inclus dans la liste des représentants selon la LDPSF ?",
    "options": [
      "1er mars 2019",
      "1er mai 2020",
      "13 juin 2019",
      "13 décembre 2019"
    ],
    "answer": "1er mai 2020",
    "page": 3
  },
  {
    "question": "Quelle est la durée de validité d'un certificat de représentant délivré par l'Autorité ?",
    "answer": "1 an",
    "page": 6
  },
  {
    "question": "Quel est le montant minimal de couverture par réclamation pour l'assurance responsabilité professionnelle d'un représentant ?",
    "answer": "500 000 $",
    "page": 24
  },
  {
    "question": "Dans quel délai un représentant doit-il accuser réception d'une plainte après sa réception ?",
    "options": [
      "24 heures",
      "5 jours ouvrables",
      "10 jours",
      "30 jours"
    ],
    "answer": "5 jours ouvrables",
    "page": 22
  },
  {
    "question": "Quel montant maximal de franchise est autorisé pour un cabinet avec plus de 3 représentants ?",
    "answer": "25 000 $",
    "page": 25
  },
  {
    "question": "Pendant combien d'années les dossiers clients doivent-ils être conservés après le dernier événement pertinent ?",
    "answer": "5 ans",
    "page": 18
  },
  {
    "question": "Quand le Règlement sur les modes alternatifs de distribution (RMAD) est-il entré en vigueur ?",
    "answer": "13 juin 2019",
    "page": 26
  },
  {
    "question": "Quelle est la période probatoire maximale pour un représentant souhaitant être inscrit dans une nouvelle discipline ?",
    "options": [
      "3 mois",
      "6 mois",
      "12 mois",
      "Non spécifié dans le document"
    ],
    "answer": "Non spécifié dans le document",
    "page": 5
  },
  {
    "question": "Quel est le montant minimal de couverture annuelle pour l'assurance responsabilité d'un représentant autonome ?",
    "answer": "1 000 000 $",
    "page": 24
  },
  {
    "question": "Dans quel délai après l'expiration du certificat un renouvellement peut-il encore être accepté ?",
    "answer": "30 jours",
    "page": 6
  },
  {
    "question": "Quel est le montant maximal d'amende pour une personne morale reconnue coupable d'infraction à la LDPSF ?",
    "options": [
      "50 000 $",
      "150 000 $",
      "200 000 $",
      "1 000 000 $"
    ],
    "answer": "200 000 $",
    "page": 28
  },
  {
    "question": "Pendant combien d'années l'assurance responsabilité professionnelle doit-elle être maintenue après la cessation d'activités ?",
    "answer": "5 ans",
    "page": 24
  },
  {
    "question": "Quel est le seuil financier pour qu'un vol soit considéré comme un acte criminel plutôt qu'une infraction sommaire ?",
    "answer": "5 000 $",
    "page": 30
  },
  {
    "question": "Quand les cabinets doivent-ils transmettre leurs déclarations annuelles à l'Autorité après réception de la demande ?",
    "answer": "45 jours",
    "page": 9
  },
  {
    "question": "Quel montant minimal de couverture annuelle est requis pour un cabinet avec plus de 3 représentants ?",
    "answer": "2 000 000 $",
    "page": 24
  },
  {
    "question": "À quelle date la modification concernant la collecte d'informations par les représentants est-elle entrée en vigueur ?",
    "options": [
      "1er mai 2020",
      "13 juin 2019",
      "13 décembre 2019",
      "1er janvier 2020"
    ],
    "answer": "13 juin 2019",
    "page": 14
  },
  {
    "question": "Quelle est la franchise maximale autorisée pour un représentant autonome ?",
    "answer": "10 000 $",
    "page": 25
  },
  {
    "question": "Combien de temps les renseignements sur le compte séparé doivent-ils être conservés ?",
    "answer": "5 ans après la dernière inscription",
    "page": 18
  },
  {
    "question": "Quel est le montant minimal d'amende pour certaines infractions spécifiques à la LDPSF ?",
    "answer": "5 000 $",
    "page": 28
  },
  {
    "question": "Dans quel délai un cabinet doit-il transmettre un avis de consignation d'une plainte au plaignant ?",
    "answer": "10 jours",
    "page": 22
  },
  {
    "question": "Quelle est la durée de validité de l'inscription d'un représentant autonome ?",
    "answer": "Jusqu'à sa radiation",
    "page": 9
  },
  {
    "question": "Quel montant d'assurance responsabilité est requis pour un représentant agissant pour un cabinet sans être employé ?",
    "options": [
      "500 000 $ par réclamation et 1 000 000 $ par an",
      "1 000 000 $ par réclamation",
      "500 000 $ par an",
      "2 000 000 $ par an"
    ],
    "answer": "500 000 $ par réclamation et 1 000 000 $ par an",
    "page": 24
  },
  {
    "question": "Quand la période transitoire pour la remise des guides de distribution a-t-elle pris fin ?",
    "answer": "12 juin 2020",
    "page": 26
  },
  {
    "question": "Quel est le montant maximal de couverture par réclamation pour l'assurance responsabilité d'un cabinet ?",
    "options": [
      "500 000 $",
      "1 000 000 $",
      "2 000 000 $",
      "Variable selon la taille"
    ],
    "answer": "500 000 $",
    "page": 24
  },
  {
    "question": "Combien de fois par an les inscrits doivent-ils déclarer les plaintes à l'Autorité ?",
    "answer": "2 fois",
    "page": 22
  },
  {
    "question": "Quel est le montant minimal d'amende pour une personne physique selon l'article 485 LDPSF ?",
    "answer": "2 000 $",
    "page": 28
  },
  {
    "question": "Pendant combien de jours les livres et registres peuvent-être détruits après leur fermeture ?",
    "options": [
      "Immédiatement après 5 ans",
      "30 jours après l'expiration du délai",
      "Après 7 ans",
      "Non spécifié dans le document"
    ],
    "answer": "Non spécifié dans le document",
    "page": 18
  },
  {
    "question": "Quel est le seuil de compétence de la Cour supérieure pour les recours civils ?",
    "answer": "85 000 $",
    "page": 38
  },
  {
    "question": "Quelle est la durée minimale de conservation des pièces justificatives des dossiers clients ?",
    "answer": "5 ans",
    "page": 18
  },
  {
    "question": "Quel montant d'amende maximale peut être imposée à un assureur pour infraction à la LDPSF ?",
    "answer": "200 000 $",
    "page": 28
  },
  {
    "question": "Quelle est la sanction maximale que peut imposer le comité de discipline de la ChAD pour un manquement déontologique grave ?",
    "options": [
      "A) Une amende de 5 000$",
      "B) Une suspension temporaire",
      "C) La radiation pure et simple",
      "D) Une réprimande écrite"
    ],
    "answer": "C) La radiation pure et simple",
    "page": 4
  },
  {
    "question": "Combien de sections comporte le Code de déontologie des représentants en assurance de dommages ?",
    "options": [
      "A) 5 sections",
      "B) 6 sections",
      "C) 7 sections",
      "D) 8 sections"
    ],
    "answer": "C) 7 sections",
    "page": 4
  },
  {
    "question": "Selon l'article 28 du Code, que risque un représentant qui ne verse pas à l'assureur les primes perçues dans un délai raisonnable ?",
    "options": [
      "A) Une simple mise en garde",
      "B) Une suspension automatique de 30 jours",
      "C) Une plainte pour manquement déontologique",
      "D) Une amende minimale de 1 000$"
    ],
    "answer": "C) Une plainte pour manquement déontologique",
    "page": 11
  },
  {
    "question": "Quel montant maximum d'avantages un représentant peut-il accepter d'un client selon l'article 5 du Code ?",
    "options": [
      "A) 100$ par cadeau",
      "B) Uniquement sa commission/honoraires contractuels",
      "C) Jusqu'à 1% de la prime",
      "D) Aucune limite si documenté"
    ],
    "answer": "B) Uniquement sa commission/honoraires contractuels",
    "page": 5
  },
  {
    "question": "Dans quel délai un représentant doit-il répondre à une convocation du syndic de la ChAD ?",
    "options": [
      "A) 5 jours ouvrables",
      "B) 10 jours calendaires",
      "C) 15 jours",
      "D) Dans les plus brefs délais (sans précision)"
    ],
    "answer": "D) Dans les plus brefs délais (sans précision)",
    "page": 12
  },
  {
    "question": "Quelle amende pourrait être imposée pour un conflit d'intérêts non déclaré (art. 37) ?",
    "options": [
      "A) 500$ à 2 000$",
      "B) 1 000$ à 5 000$",
      "C) 2 000$ à 10 000$",
      "D) Le montant est laissé à la discrétion du comité"
    ],
    "answer": "D) Le montant est laissé à la discrétion du comité",
    "page": 15
  },
  {
    "question": "Depuis quelle date un courtier doit-il obtenir des commissions d'au moins 3 assureurs indépendants ?",
    "options": [
      "A) 1er janvier 2018",
      "B) 13 décembre 2019",
      "C) 1er juillet 2020",
      "D) 1er janvier 2021"
    ],
    "answer": "B) 13 décembre 2019",
    "page": 5
  },
  {
    "question": "Quel article interdit de verser une commission à un entrepreneur pour l'envoi de clients ?",
    "options": [
      "A) Article 3",
      "B) Article 6",
      "C) Article 9",
      "D) Article 12"
    ],
    "answer": "B) Article 6",
    "page": 6
  },
  {
    "question": "Combien de facteurs doivent être considérés pour fixer des honoraires selon l'article 21 ?",
    "options": [
      "A) 3 facteurs",
      "B) 5 facteurs",
      "C) 7 facteurs",
      "D) 9 facteurs"
    ],
    "answer": "C) 7 facteurs",
    "page": 8
  },
  {
    "question": "Quelle est la pénalité civile pour fausse déclaration selon le Code civil (art. 2472) ?",
    "options": [
      "A) Doublement de la franchise",
      "B) Réduction de 50% de l'indemnité",
      "C) Déchéance du droit à indemnisation",
      "D) Amende de 10% du sinistre"
    ],
    "answer": "C) Déchéance du droit à indemnisation",
    "page": 14
  },
  {
    "question": "Dans l'exemple de Nathalie (page 14), quel montant a-t-elle détourné ?",
    "options": [
      "A) Le montant exact de la prime d'assurance",
      "B) Une partie non précisée de la prime",
      "C) 500$",
      "D) Le solde de sa carte de crédit"
    ],
    "answer": "A) Le montant exact de la prime d'assurance",
    "page": 14
  },
  {
    "question": "Quel article exige la divulgation immédiate des frais supplémentaires au client ?",
    "options": [
      "A) Article 18",
      "B) Article 21",
      "C) Article 22",
      "D) Article 25"
    ],
    "answer": "C) Article 22",
    "page": 8
  },
  {
    "question": "Combien de jours un représentant a-t-il pour informer un client d'un empêchement selon l'art.26 ?",
    "options": [
      "A) 24 heures",
      "B) 48 heures",
      "C) 5 jours",
      "D) Sans délai précis (dans les plus brefs délais)"
    ],
    "answer": "D) Sans délai précis (dans les plus brefs délais)",
    "page": 9
  },
  {
    "question": "Quel pourcentage de réduction Yan a-t-il proposé à Patricia pour retirer sa plainte ?",
    "options": [
      "A) 5%",
      "B) 10%",
      "C) 15%",
      "D) Montant non précisé"
    ],
    "answer": "D) Montant non précisé",
    "page": 18
  },
  {
    "question": "Quel est le montant des honoraires facturés par Julienne à Guylain ?",
    "options": [
      "A) 250$",
      "B) 500$",
      "C) 750$",
      "D) 1 000$"
    ],
    "answer": "B) 500$",
    "page": 17
  },
  {
    "question": "Quelle durée maximale d'enquête le syndic a-t-il pour traiter une plainte ?",
    "options": [
      "A) 30 jours",
      "B) 60 jours",
      "C) 90 jours",
      "D) Non spécifiée dans le Code"
    ],
    "answer": "D) Non spécifiée dans le Code",
    "page": 12
  },
  {
    "question": "Selon l'art.37, combien de types de manquements déontologiques sont listés ?",
    "options": [
      "A) 8 types",
      "B) 11 types",
      "C) 14 types",
      "D) 16 types"
    ],
    "answer": "C) 14 types",
    "page": 15
  },
  {
    "question": "Quelle est la sanction minimale pour entrave à une enquête (art.35) ?",
    "options": [
      "A) Avertissement verbal",
      "B) Réprimande écrite",
      "C) Amende de 1 000$",
      "D) Suspension temporaire"
    ],
    "answer": "B) Réprimande écrite",
    "page": 12
  },
  {
    "question": "Dans l'exemple de Guillaume, combien de demandes du syndic n'a-t-il pas respectées ?",
    "options": [
      "A) 1 demande",
      "B) 2 demandes",
      "C) 3 demandes",
      "D) 4 demandes"
    ],
    "answer": "D) 4 demandes",
    "page": 12
  },
  {
    "question": "Quel article interdit spécifiquement de facturer des services non rendus ?",
    "options": [
      "A) Article 37.8°",
      "B) Article 37.13°",
      "C) Article 21",
      "D) Article 5"
    ],
    "answer": "B) Article 37.13°",
    "page": 14
  },
  {
    "question": "Selon l'article 3 du Code de déontologie, que ne peut pas faire un expert en sinistre concernant la rémunération ?",
    "options": [
      "Accepter des paiements en espèces",
      "Verser une rémunération à une personne non certifiée",
      "Facturer des frais supplémentaires après mandat",
      "Travailler sans contrat écrit"
    ],
    "answer": "Verser une rémunération à une personne non certifiée",
    "page": "4"
  },
  {
    "question": "Quel est le taux maximum d'intérêt qu'un expert en sinistre peut exiger sur un compte en souffrance ?",
    "options": [
      "Taux fixé par la Banque du Canada",
      "Taux du marché privé",
      "Taux fixé par l'article 28 de la Loi sur l'administration fiscale",
      "5% quel que soit le montant"
    ],
    "answer": "Taux fixé par l'article 28 de la Loi sur l'administration fiscale",
    "page": "11"
  },
  {
    "question": "Combien de jours l'assuré a-t-il pour mettre fin à un mandat donné précipitamment après un sinistre ?",
    "answer": "L'article 50 al. 1 LDPSF prévoit un délai mais n'est pas précisé dans le document",
    "page": "9"
  },
  {
    "question": "Dans quel cas une avance sur honoraires serait-elle considérée comme justifiée ?",
    "options": [
      "Pour couvrir les frais de déplacement en hélicoptère",
      "Quand l'expert a des problèmes financiers",
      "Pour tous les mandats dépassant 1 mois",
      "Lorsque le sinistré refuse de payer"
    ],
    "answer": "Pour couvrir les frais de déplacement en hélicoptère",
    "page": "10"
  },
  {
    "question": "Quelle sanction maximale peut imposer le comité de discipline ?",
    "options": [
      "Amende de 10 000$",
      "Radiation pure et simple",
      "Emprisonnement de 6 mois",
      "Suspension de 1 an"
    ],
    "answer": "Radiation pure et simple",
    "page": "3"
  },
  {
    "question": "Selon l'article 58, quel comportement constitue un manquement grave exposant à la radiation ?",
    "answer": "S'approprier de l'argent confié dans l'exercice d'un mandat",
    "page": "17"
  },
  {
    "question": "Quel montant maximum de couverture pour la dépollution était prévu dans l'exemple de Carl ?",
    "answer": "10 000$",
    "page": "15"
  },
  {
    "question": "Combien de sections comporte le Code de déontologie des experts en sinistre ?",
    "options": [
      "5 sections",
      "8 sections",
      "10 sections",
      "12 sections"
    ],
    "answer": "8 sections",
    "page": "3"
  },
  {
    "question": "Quand un expert doit-il aviser l'assuré d'une date de prescription ?",
    "options": [
      "1 mois avant l'échéance",
      "Dès la signature du mandat",
      "Lorsqu'elle est proche",
      "Seulement si l'assuré demande"
    ],
    "answer": "Lorsqu'elle est proche",
    "page": "7"
  },
  {
    "question": "Quel article interdit de déconseiller une seconde opinion à un assuré ?",
    "answer": "Article 11 paragraphe 5°",
    "page": "6"
  },
  {
    "question": "Dans l'exemple de Sylvain, pourquoi son comportement est-il contraire au Code ?",
    "options": [
      "Il a refusé de remettre des photos à l'assuré",
      "Il a facturé des frais excessifs",
      "Il a travaillé sans mandat",
      "Il a divulgué des informations confidentielles"
    ],
    "answer": "Il a refusé de remettre des photos à l'assuré",
    "page": "11"
  },
  {
    "question": "Quel est le délai pour répondre à une demande du syndic ?",
    "answer": "Dans les plus brefs délais",
    "page": "13"
  },
  {
    "question": "Quel facteur NE DOIT PAS être considéré pour fixer les honoraires selon l'article 39 ?",
    "options": [
      "Difficulté du problème",
      "Temps consacré",
      "Résultat obtenu",
      "Situation financière du client"
    ],
    "answer": "Situation financière du client",
    "page": "10"
  },
  {
    "question": "Quelle somme Donald aurait-il fait perdre à son ami par fraude ?",
    "answer": "Déchéance du droit à l'indemnisation (montant non précisé)",
    "page": "16"
  },
  {
    "question": "Combien de jours d'absence étaient réels dans l'exemple de fraude de Donald ?",
    "answer": "Plus de 7 jours",
    "page": "16"
  },
  {
    "question": "Où doit être conservée une avance sur honoraires ?",
    "options": [
      "Compte personnel de l'expert",
      "Compte séparé",
      "Coffre-fort professionnel",
      "Compte client"
    ],
    "answer": "Compte séparé",
    "page": "10"
  },
  {
    "question": "Quelle est la durée maximale d'un mandat selon le Code ?",
    "answer": "Non précisée (doit être mené à terme sauf révocation)",
    "page": "9"
  },
  {
    "question": "Quel article interdit d'emprunter de l'argent à un assuré ?",
    "answer": "Article 46",
    "page": "11"
  },
  {
    "question": "Quelle amende pourrait être imposée pour appropriation de fonds ?",
    "answer": "Non précisée (varie selon gravité)",
    "page": "17"
  },
  {
    "question": "Quand un expert doit-il informer de son impossibilité à suivre les instructions ?",
    "options": [
      "Dans les 30 jours",
      "Avant la fin du mandat",
      "Dans les plus brefs délais",
      "Par courrier recommandé"
    ],
    "answer": "Dans les plus brefs délais",
    "page": "9"
  }
];


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerRevealed, setAnswerRevealed] = useState({});
  const [selfEvaluation, setSelfEvaluation] = useState({});
  const [showRetryOption, setShowRetryOption] = useState(false);
  const [retryMode, setRetryMode] = useState(false);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);

  const handleMultipleChoice = (answer) => {
    setSelectedOption(answer);
    setUserAnswers({
      ...userAnswers,
      [currentQuestion]: answer
    });
    setShowAnswer(true);
  };

  const revealAnswer = () => {
    setShowAnswer(true);
    setAnswerRevealed({
      ...answerRevealed,
      [currentQuestion]: true
    });
  };

  const handleSelfEvaluation = (isCorrect) => {
    setSelfEvaluation({
      ...selfEvaluation,
      [currentQuestion]: isCorrect
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
      setShowAnswer(false);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const prevAnswer = userAnswers[currentQuestion - 1];
      if (questions[currentQuestion - 1].options) {
        setSelectedOption(prevAnswer || '');
        setShowAnswer(!!prevAnswer);
      } else {
        setShowAnswer(answerRevealed[currentQuestion - 1] || false);
      }
    }
  };

  const calculateResults = () => {
    const incorrect = [];
    questions.forEach((q, index) => {
      if (q.options) {
        // Question à choix multiples
        const userAnswer = userAnswers[index];
        if (!userAnswer || userAnswer !== q.answer) {
          incorrect.push(index);
        }
      } else {
        // Question simple - basé sur l'auto-évaluation
        if (selfEvaluation[index] === false) {
          incorrect.push(index);
        }
      }
    });
    
    setIncorrectQuestions(incorrect);
    setShowRetryOption(incorrect.length > 0);
    setShowResults(true);
  };

  const startRetryMode = () => {
    setRetryMode(true);
    setCurrentQuestion(incorrectQuestions[0]);
    setShowResults(false);
    setShowAnswer(false);
    setSelectedOption('');
    // Réinitialiser les états pour les questions à reprendre
    const newAnswerRevealed = { ...answerRevealed };
    const newSelfEvaluation = { ...selfEvaluation };
    incorrectQuestions.forEach(index => {
      if (!questions[index].options) {
        newAnswerRevealed[index] = false;
        delete newSelfEvaluation[index];
      }
    });
    setAnswerRevealed(newAnswerRevealed);
    setSelfEvaluation(newSelfEvaluation);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    setSelectedOption('');
    setShowAnswer(false);
    setAnswerRevealed({});
    setSelfEvaluation({});
    setShowRetryOption(false);
    setRetryMode(false);
    setIncorrectQuestions([]);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (q.options) {
        const userAnswer = userAnswers[index];
        if (userAnswer && userAnswer === q.answer) {
          correct++;
        }
      } else {
        if (selfEvaluation[index] === true) {
          correct++;
        }
      }
    });
    return correct;
  };

  const isAnswerCorrect = (questionIndex) => {
    const q = questions[questionIndex];
    if (q.options) {
      const userAnswer = userAnswers[questionIndex];
      return userAnswer && userAnswer === q.answer;
    } else {
      return selfEvaluation[questionIndex] === true;
    }
  };

  const getNextRetryQuestion = () => {
    const currentRetryIndex = incorrectQuestions.indexOf(currentQuestion);
    if (currentRetryIndex < incorrectQuestions.length - 1) {
      return incorrectQuestions[currentRetryIndex + 1];
    }
    return null;
  };

  const getPrevRetryQuestion = () => {
    const currentRetryIndex = incorrectQuestions.indexOf(currentQuestion);
    if (currentRetryIndex > 0) {
      return incorrectQuestions[currentRetryIndex - 1];
    }
    return null;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            🎉 Résultats du Quiz 🎉
          </h2>
          <div className="text-7xl font-bold mb-6">
            <span className={`${percentage >= 70 ? 'text-green-500' : percentage >= 50 ? 'text-yellow-500' : 'text-red-500'} drop-shadow-lg`}>
              {percentage}%
            </span>
          </div>
          <p className="text-2xl text-gray-700 font-semibold">
            {score} sur {questions.length} bonnes réponses
          </p>
          <div className="mt-4">
            {percentage >= 70 && <div className="text-2xl">🏆 Excellent travail!</div>}
            {percentage >= 50 && percentage < 70 && <div className="text-2xl">👍 Bon travail!</div>}
            {percentage < 50 && <div className="text-2xl">💪 Continue à étudier!</div>}
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {questions.map((q, index) => (
            <div key={index} className={`p-6 rounded-2xl border-2 shadow-lg transform transition-all hover:scale-105 ${
              isAnswerCorrect(index) 
                ? 'border-green-400 bg-gradient-to-r from-green-50 to-emerald-50' 
                : 'border-red-400 bg-gradient-to-r from-red-50 to-pink-50'
            }`}>
              <div className="flex items-start gap-4">
                {isAnswerCorrect(index) ? 
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={24} /> : 
                  <XCircle className="text-red-600 mt-1 flex-shrink-0" size={24} />
                }
                <div className="flex-grow">
                  <p className="font-bold text-gray-800 mb-3 text-lg">{q.question}</p>
                  <div className="text-base space-y-2">
                    {q.options ? (
                      <>
                        <p className="text-gray-700">
                          <span className="font-semibold text-blue-600">Votre réponse:</span> 
                          <span className="ml-2 px-3 py-1 rounded-full bg-white/70">
                            {userAnswers[index] || 'Pas de réponse'}
                          </span>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold text-green-600">Bonne réponse:</span> 
                          <span className="ml-2 px-3 py-1 rounded-full bg-white/70 font-medium">
                            {q.answer}
                          </span>
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-gray-700">
                          <span className="font-semibold text-blue-600">Votre auto-évaluation:</span> 
                          <span className="ml-2 px-3 py-1 rounded-full bg-white/70">
                            {selfEvaluation[index] === true ? '✅ Correct' : selfEvaluation[index] === false ? '❌ Incorrect' : 'Non évaluée'}
                          </span>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold text-green-600">Réponse:</span> 
                          <span className="ml-2 px-3 py-1 rounded-full bg-white/70 font-medium">
                            {q.answer}
                          </span>
                        </p>
                      </>
                    )}
                    <p className="text-gray-600">
                      <span className="font-semibold">📄 Page:</span> {q.page}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          {showRetryOption && (
            <button
              onClick={startRetryMode}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 font-bold text-lg shadow-lg mr-4"
            >
              <RotateCcw size={24} />
              🔄 Refaire les questions ratées
            </button>
          )}
          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
          >
            <RotateCcw size={24} />
            🔄 Recommencer tout le quiz
          </button>
        </div>
      </div>
    );
  }

  const current = questions[currentQuestion];
  const hasOptions = current.options && current.options.length > 0;
  const isCorrect = selectedOption === current.answer;

  // Navigation pour le mode retry
  const nextRetryQuestion = getNextRetryQuestion();
  const prevRetryQuestion = getPrevRetryQuestion();

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl shadow-2xl">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            📚 Quiz - Code de Déontologie {retryMode && <span className="text-orange-600">🔄 (Rattrapage)</span>}
          </h1>
          <span className="text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-full shadow-lg">
            {retryMode ? 
              `Question ${incorrectQuestions.indexOf(currentQuestion) + 1} / ${incorrectQuestions.length}` :
              `Question ${currentQuestion + 1} / ${questions.length}`
            }
          </span>
        </div>
        
        {!retryMode && (
          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500 shadow-lg"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        )}
      </div>

      <div className="mb-10">
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">{current.question}</h2>
          
          {hasOptions ? (
            <div className="space-y-4">
              {current.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all transform hover:scale-102 ${
                    selectedOption === option
                      ? showAnswer
                        ? option === current.answer
                          ? 'border-green-500 bg-gradient-to-r from-green-100 to-emerald-100 shadow-lg'
                          : 'border-red-500 bg-gradient-to-r from-red-100 to-pink-100 shadow-lg'
                        : 'border-blue-500 bg-gradient-to-r from-blue-100 to-cyan-100 shadow-lg'
                      : 'border-gray-300 bg-white/50 hover:border-gray-400 hover:bg-white/70'
                  }`}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => handleMultipleChoice(e.target.value)}
                    className="mr-4 w-5 h-5"
                    disabled={showAnswer}
                  />
                  <span className="text-gray-800 font-medium text-lg">{option}</span>
                  {showAnswer && option === current.answer && (
                    <CheckCircle className="ml-auto text-green-600" size={24} />
                  )}
                  {showAnswer && selectedOption === option && option !== current.answer && (
                    <XCircle className="ml-auto text-red-600" size={24} />
                  )}
                </label>
              ))}
              
              {showAnswer && (
                <div className={`mt-6 p-5 rounded-xl border-2 ${
                  isCorrect 
                    ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50' 
                    : 'border-red-500 bg-gradient-to-r from-red-50 to-pink-50'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    {isCorrect ? (
                      <CheckCircle className="text-green-600" size={24} />
                    ) : (
                      <XCircle className="text-red-600" size={24} />
                    )}
                    <span className="font-bold text-lg">
                      {isCorrect ? '🎉 Correct!' : '❌ Incorrect'}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">
                    La bonne réponse est: <span className="font-bold text-green-700">{current.answer}</span>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-300 mb-6">
                <p className="text-lg text-gray-700 mb-4">🤔 Réfléchissez à votre réponse, puis cliquez pour voir la solution!</p>
              </div>
              
              {!showAnswer ? (
                <button
                  onClick={revealAnswer}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  <Eye size={24} />
                  👁️ Révéler la réponse
                </button>
              ) : (
                <div>
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border-2 border-blue-300 shadow-lg mb-6">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <EyeOff className="text-blue-600" size={24} />
                      <span className="font-bold text-xl text-blue-800">💡 Réponse:</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-900 bg-white/50 p-4 rounded-lg mb-6">
                      {current.answer}
                    </p>
                  </div>
                  
                  {selfEvaluation[currentQuestion] === undefined && (
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
                      <p className="text-lg font-semibold text-gray-800 mb-4">
                        🎯 Aviez-vous la bonne réponse en tête ?
                      </p>
                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={() => handleSelfEvaluation(true)}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 font-bold shadow-lg"
                        >
                          <ThumbsUp size={20} />
                          ✅ Oui, j'avais bon!
                        </button>
                        <button
                          onClick={() => handleSelfEvaluation(false)}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 transition-all transform hover:scale-105 font-bold shadow-lg"
                        >
                          <ThumbsDown size={20} />
                          ❌ Non, j'avais faux
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {selfEvaluation[currentQuestion] !== undefined && (
                    <div className={`p-4 rounded-xl border-2 ${
                      selfEvaluation[currentQuestion] 
                        ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50' 
                        : 'border-red-500 bg-gradient-to-r from-red-50 to-pink-50'
                    }`}>
                      <p className="font-bold text-lg">
                        {selfEvaluation[currentQuestion] ? '🎉 Félicitations!' : '💪 À revoir!'}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-600 bg-white/50 px-4 py-2 rounded-full inline-block">
            📄 Page de référence: <span className="text-blue-600 font-bold">{current.page}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => {
            if (retryMode) {
              if (prevRetryQuestion !== null) {
                setCurrentQuestion(prevRetryQuestion);
                setShowAnswer(false);
                setSelectedOption('');
              }
            } else {
              prevQuestion();
            }
          }}
          disabled={retryMode ? prevRetryQuestion === null : currentQuestion === 0}
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-lg transition-all transform ${
            (retryMode ? prevRetryQuestion === null : currentQuestion === 0)
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700 hover:scale-105 shadow-lg'
          }`}
        >
          <ArrowLeft size={20} />
          ⬅️ Précédent
        </button>

        <button
          onClick={() => {
            if (retryMode) {
              if (nextRetryQuestion !== null) {
                setCurrentQuestion(nextRetryQuestion);
                setShowAnswer(false);
                setSelectedOption('');
              } else {
                calculateResults();
              }
            } else {
              nextQuestion();
            }
          }}
          disabled={hasOptions ? !selectedOption : (!showAnswer || selfEvaluation[currentQuestion] === undefined)}
          className={`inline-flex items-center gap-3 px-8 py-3 rounded-xl font-bold text-lg transition-all transform ${
            (hasOptions ? !selectedOption : (!showAnswer || selfEvaluation[currentQuestion] === undefined))
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 hover:scale-105 shadow-lg'
          }`}
        >
          {(retryMode && nextRetryQuestion === null) || (!retryMode && currentQuestion === questions.length - 1) ? '🏁 Terminer' : '➡️ Suivant'}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Quiz;