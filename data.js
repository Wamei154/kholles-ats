// --- DONNÉES DE L'AGENDA (DS et Observations) ---
const agendaData = {
    "0": { date: "5 sept.", ds: "", obs: "" },
    "1": { date: "12 sept.", ds: "", obs: "" },
    "2": { date: "19 sept.", ds: "Physique+Math.", obs: "" },
    "3": { date: "26 sept.", ds: "Méca+Français", obs: "" },
    "4": { date: "3 oct.", ds: "Élec+Anglais", obs: "" },
    "5": { date: "10 oct.", ds: "Mathématiques", obs: "" },
    "6": { date: "17 oct.", ds: "", obs: "" },
    "7": { date: "7 nov.", ds: "Physique", obs: "" },
    "8": { date: "14 nov.", ds: "Méca+Français", obs: "Mercredi férié" },
    "9": { date: "21 nov.", ds: "Élec+Anglais", obs: "" },
    "10": { date: "28 nov.", ds: "Mathématiques", obs: "" },
    "11": { date: "5 déc.", ds: "Physique", obs: "" },
    "12": { date: "12 déc.", ds: "Méca+Français", obs: "" },
    "13": { date: "19 déc.", ds: "", obs: "" },
    "14": { date: "9 janv.", ds: "Élec+Anglais", obs: "" },
    "15": { date: "16 janv.", ds: "Mathématiques", obs: "" },
    "16": { date: "23 janv.", ds: "Physique", obs: "" },
    "17": { date: "30 janv.", ds: "Méca+Français", obs: "" },
    "18": { date: "6 févr.", ds: "Élec+Anglais", obs: "" },
    "19": { date: "13 févr.", ds: "", obs: "" },
    "20": { date: "20 févr.", ds: "Concours Blanc du mercredi au vendredi", obs: "" },
    "21": { date: "13 mars", ds: "Mathématiques", obs: "" },
    "22": { date: "20 mars", ds: "Physique", obs: "" },
    "23": { date: "27 mars", ds: "Français+Anglais", obs: "" },
    "24": { date: "3 avr.", ds: "Méca+Élec", obs: "Lundi férié" },
    "25": { date: "10 avr.", ds: "", obs: "" },
    "26": { date: "17 avr.", ds: "", obs: "" }
};

// --- DONNÉES DU COLLOSCOPE (Année complète 27 semaines) ---
const colloscopeData = [
    // Maths
    { subject: "Maths", prof: "M. Devalland", room: "403", time: "Ven 16h45-17h40", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "11", "6", "1", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "12", "7", "2", "-", "13", "8", "3", "14", "9", "4"] },
    { subject: "Maths", prof: "M. Maurel", room: "401", time: "Mer 13h25-14h20", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "4", "13", "6", "1", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "15", "7", "-", "2", "13", "8", "3", "14", "9"] },
    { subject: "Maths", prof: "M. Maurel", room: "401", time: "Mer 14h25-15h20", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "9", "4", "11", "10", "5", "11", "6", "1", "13", "8", "5", "11", "6", "4", "11", "6", "1", "15", "-", "7", "5", "11", "6", "1", "12"] },
    { subject: "Maths", prof: "Mme Halé", room: "401", time: "Mer 16h25-17h20", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "13", "10", "5", "15", "6", "1", "11", "6", "1", "12", "10", "5", "11", "6", "1", "14", "6", "1", "-", "15", "10", "5", "11", "6", "1"] },
    { subject: "Maths", prof: "Mme Halé", room: "401", time: "Mer 17h20-18h15", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "14", "9", "4", "11", "10", "5", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "-", "12", "7", "2", "13", "8", "3"] },
    { subject: "Maths", prof: "M. Capelle", room: "405", time: "Mer 12h05-13h00", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "2", "15", "10", "5", "14", "9", "4", "11", "6", "1", "12", "7", "2", "11", "6", "1", "12", "9", "-", "4", "15", "10", "5", "12", "7"] },
    { subject: "Maths", prof: "M. Capelle", room: "405", time: "Mer 13h00-13h55", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "5", "11", "8", "3", "11", "6", "1", "15", "10", "5", "11", "6", "1", "13", "8", "3", "14", "10", "-", "5", "11", "6", "1", "15", "10"] },
    { subject: "Maths", prof: "Mme Devalland", room: "401", time: "Ven 15h50-16h45", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "6", "1", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "12", "7", "2", "13", "-", "8", "3", "14", "9", "4", "11"] },
    { subject: "Maths", prof: "Mme Devalland", room: "401", time: "Ven 16h45-17h40", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "15", "7", "2", "13", "8", "3", "14", "9", "4", "11", "6", "1", "12", "7", "2", "11", "8", "3", "-", "14", "9", "4", "15", "10", "5"] },
    { subject: "Maths", prof: "M. Louatron", room: "Expo", time: "Lun 14h55-15h50", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "12", "8", "3", "14", "9", "4", "15", "10", "5", "15", "7", "2", "13", "8", "3", "13", "9", "4", "-", "11", "6", "1", "12", "7", "2"] },
    { subject: "Maths", prof: "Mme Denis", room: "403", time: "Mer 14h25-15h20", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "10", "5", "15", "6", "1", "12", "7", "2", "15", "10", "3", "14", "9", "1", "15", "10", "5", "12", "-", "10", "2", "13", "8", "3", "14"] },
    { subject: "Maths", prof: "M. Mechelinck", room: "403", time: "Mar 15h55-16h50", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "1", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "3", "7", "9", "13", "8", "-", "3", "12", "9", "4", "11", "6"] },
    { subject: "Maths", prof: "M. Mechelinck", room: "403", time: "Mar 16h50-17h45", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "8", "3", "14", "9", "4", "15", "10", "5", "12", "7", "2", "13", "8", "12", "14", "2", "4", "11", "-", "6", "1", "12", "7", "2", "15"] },
    { subject: "Maths", prof: "M. Hédier", room: "324", time: "Lun 15h55-16h50", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "7", "2", "13", "8", "3", "14", "9", "4", "11", "6", "1", "12", "7", "2", "13", "8", "3", "14", "-", "9", "4", "15", "10", "5", "13"] },
    { subject: "Maths", prof: "M. Hédier", room: "324", time: "Lun 16h50-17h45", icon: "fa-calculator", color: "text-blue-400", bg: "bg-blue-900/30", border: "border-blue-500/30", groups: ["-", "-", "3", "14", "9", "4", "15", "10", "5", "12", "7", "2", "13", "8", "3", "14", "9", "4", "11", "6", "-", "1", "14", "7", "2", "13", "8"] },
    
    // Physique
    { subject: "Physique", prof: "M. Telitchko", room: "420", time: "Lun 14h55-15h50", icon: "fa-bolt", color: "text-yellow-400", bg: "bg-yellow-900/30", border: "border-yellow-500/30", groups: ["-", "-", "3", "14", "9", "4", "15", "10", "5", "12", "7", "2", "13", "8", "3", "14", "9", "4", "11", "6", "-", "1", "12", "7", "2", "13", "8"] },
    { subject: "Physique", prof: "M. Telitchko", room: "420", time: "Lun 15h55-16h50", icon: "fa-bolt", color: "text-yellow-400", bg: "bg-yellow-900/30", border: "border-yellow-500/30", groups: ["-", "-", "9", "4", "15", "10", "5", "-", "7", "-", "13", "8", "3", "14", "9", "4", "15", "10", "5", "-", "-", "7", "2", "13", "8", "3", "14"] },
    { subject: "Physique", prof: "M. Hérout", room: "120", time: "Mar 15h55-16h50", icon: "fa-bolt", color: "text-yellow-400", bg: "bg-yellow-900/30", border: "border-yellow-500/30", groups: ["-", "-", "11", "6", "1", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "6", "7", "2", "-", "13", "8", "3", "14", "9", "4"] },
    { subject: "Physique", prof: "M. Denis", room: "401", time: "Mar 15h55-16h50", icon: "fa-bolt", color: "text-yellow-400", bg: "bg-yellow-900/30", border: "border-yellow-500/30", groups: ["-", "-", "15", "10", "5", "-", "11", "6", "1", "2", "15", "10", "5", "-", "11", "6", "1", "12", "15", "10", "-", "5", "-", "11", "6", "1", "12"] },
    { subject: "Physique", prof: "M. Duprès", room: "401", time: "Jeu 17h30-18h25", icon: "fa-bolt", color: "text-yellow-400", bg: "bg-yellow-900/30", border: "border-yellow-500/30", groups: ["-", "-", "13", "8", "3", "14", "9", "4", "15", "10", "5", "-", "7", "2", "13", "8", "3", "14", "9", "4", "-", "11", "6", "1", "12", "7", "2"] },
    { subject: "Physique", prof: "M. Lecoq", room: "401", time: "Mar 15h55-16h50", icon: "fa-bolt", color: "text-yellow-400", bg: "bg-yellow-900/30", border: "border-yellow-500/30", groups: ["-", "-", "7", "2", "13", "8", "3", "14", "9", "4", "11", "6", "1", "6", "1", "12", "11", "2", "1", "12", "-", "15", "4", "15", "10", "15", "10"] },
    { subject: "Physique", prof: "M. Lecoq", room: "401", time: "Mar 16h50-17h45", icon: "fa-bolt", color: "text-yellow-400", bg: "bg-yellow-900/30", border: "border-yellow-500/30", groups: ["-", "-", "5", "-", "11", "6", "1", "12", "11", "6", "1", "12", "15", "10", "7", "2", "13", "8", "3", "14", "-", "9", "10", "5", "4", "5", "-"] },
    { subject: "Physique", prof: "M. Hérout", room: "120", time: "Mar 16h50-17h45", icon: "fa-bolt", color: "text-yellow-400", bg: "bg-yellow-900/30", border: "border-yellow-500/30", groups: ["-", "-", "1", "12", "7", "2", "13", "8", "3", "14", "9", "4", "11", "12", "5", "-", "7", "-", "13", "8", "-", "3", "14", "9", "-", "11", "6"] },

    // Anglais
    { subject: "Anglais", prof: "Mme Agoutin", room: "409+412", time: "Ven 16h05-17h25", icon: "fa-language", color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-500/30", groups: ["-", "-", "4", "11", "6", "1", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "14", "7", "-", "2", "13", "8", "3", "14", "9"] },
    { subject: "Anglais", prof: "Mme Poret", room: "412+416", time: "Mer 14h30-15h50", icon: "fa-language", color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-500/30", groups: ["-", "-", "6", "1", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "12", "7", "2", "13", "-", "8", "3", "14", "9", "4", "11"] },
    { subject: "Anglais", prof: "Mme Pugh", room: "305+307", time: "Mer 16h30-17h50", icon: "fa-language", color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-500/30", groups: ["-", "-", "12", "7", "2", "13", "8", "3", "14", "9", "4", "11", "6", "1", "12", "7", "2", "13", "8", "3", "-", "14", "9", "4", "15", "10", "5"] },
    { subject: "Anglais", prof: "Mme Pugh", room: "305+307", time: "Mer 17h30-18h50", icon: "fa-language", color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-500/30", groups: ["-", "-", "2", "13", "10", "3", "6", "9", "4", "15", "10", "5", "12", "11", "6", "13", "8", "3", "6", "9", "-", "4", "11", "6", "1", "12", "7"] },
    { subject: "Anglais", prof: "M. Delalande", room: "410+409", time: "Mer 14h30-15h50", icon: "fa-language", color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-500/30", groups: ["-", "-", "8", "3", "14", "9", "4", "15", "10", "5", "12", "7", "2", "13", "8", "3", "14", "9", "4", "11", "-", "6", "1", "12", "7", "2", "13"] },
    { subject: "Anglais", prof: "M. Delalande", room: "410+409", time: "Mer 16h00-17h20", icon: "fa-language", color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-500/30", groups: ["-", "-", "14", "9", "4", "11", "10", "5", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "-", "12", "7", "2", "13", "8", "3"] },
    { subject: "Anglais", prof: "M. Thouary", room: "409+411", time: "Lun 17h15-18h35", icon: "fa-language", color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-500/30", groups: ["-", "-", "10", "15", "8", "5", "14", "11", "6", "1", "6", "1", "10", "5", "2", "11", "6", "1", "12", "15", "-", "10", "5", "10", "11", "6", "1"] },
    { subject: "Anglais", prof: "Mme Gonac'h", room: "420+417", time: "Mar 17h00-18h20", icon: "fa-language", color: "text-purple-400", bg: "bg-purple-900/30", border: "border-purple-500/30", groups: ["-", "-", "-", "5", "-", "15", "-", "1", "-", "11", "-", "15", "-", "7", "-", "1", "-", "11", "-", "1", "-", "-", "15", "-", "5", "-", "3"] },

    // Mécanique
    { subject: "Méca", prof: "M. Pigny", room: "93", time: "Mer 13h20-14h15", icon: "fa-wrench", color: "text-orange-400", bg: "bg-orange-900/30", border: "border-orange-500/30", groups: ["-", "-", "3", "14", "9", "4", "15", "10", "5", "-", "7", "2", "13", "8", "3", "14", "9", "4", "11", "6", "-", "1", "12", "7", "2", "13", "8"] },
    { subject: "Méca", prof: "M. Pigny", room: "93", time: "Mer 14h25-15h20", icon: "fa-wrench", color: "text-orange-400", bg: "bg-orange-900/30", border: "border-orange-500/30", groups: ["-", "-", "7", "2", "13", "8", "3", "14", "9", "4", "11", "6", "1", "12", "7", "2", "13", "8", "3", "14", "-", "9", "4", "15", "10", "5", "-"] },
    { subject: "Méca", prof: "M. Olivier", room: "78", time: "Lun 14h55-15h50", icon: "fa-wrench", color: "text-orange-400", bg: "bg-orange-900/30", border: "border-orange-500/30", groups: ["-", "-", "11", "6", "1", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "12", "7", "2", "-", "13", "8", "3", "14", "9", "4"] },
    { subject: "Méca", prof: "M. Olivier", room: "78", time: "Lun 15h55-16h50", icon: "fa-wrench", color: "text-orange-400", bg: "bg-orange-900/30", border: "border-orange-500/30", groups: ["-", "-", "15", "10", "5", "-", "11", "6", "1", "12", "15", "10", "5", "-", "11", "6", "1", "-", "15", "10", "-", "5", "-", "11", "6", "1", "12"] },

    // Elec / TP
    { subject: "Elec", prof: "M. Lemesle", room: "155", time: "Lun 16h50-17h45", icon: "fa-desktop", color: "text-emerald-400", bg: "bg-emerald-900/30", border: "border-emerald-500/30", groups: ["-", "-", "13", "8", "3", "14", "9", "4", "15", "10", "5", "12", "7", "2", "13", "8", "3", "14", "9", "4", "-", "11", "6", "1", "12", "7", "2"] },
    { subject: "Elec", prof: "M. Lemesle", room: "155", time: "Lun 17h45-18h40", icon: "fa-desktop", color: "text-emerald-400", bg: "bg-emerald-900/30", border: "border-emerald-500/30", groups: ["-", "-", "9", "4", "15", "10", "5", "-", "11", "6", "1", "-", "11", "6", "1", "-", "11", "6", "1", "-", "-", "7", "2", "13", "-", "15", "10"] },
    { subject: "Elec", prof: "M. Poulet", room: "93", time: "Lun 16h50-17h45", icon: "fa-desktop", color: "text-emerald-400", bg: "bg-emerald-900/30", border: "border-emerald-500/30", groups: ["-", "-", "5", "-", "11", "6", "1", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "12", "-", "15", "10", "5", "8", "3", "14"] },
    { subject: "Elec", prof: "M. Poulet", room: "79", time: "Mer 12h00-12h55", icon: "fa-desktop", color: "text-emerald-400", bg: "bg-emerald-900/30", border: "border-emerald-500/30", groups: ["-", "-", "1", "12", "7", "2", "13", "8", "3", "14", "9", "4", "15", "10", "5", "12", "7", "2", "13", "8", "-", "3", "14", "9", "4", "11", "6"] },
    
    // TP Info
    { subject: "TP Info - Gr. 1", prof: "M. Poulet", room: "93", time: "Lun 14h55-15h50", icon: "fa-laptop-code", color: "text-emerald-400", bg: "bg-emerald-900/30", border: "border-emerald-500/30", groups: ["-", "-", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15"] },
    { subject: "TP Info - Gr. 2", prof: "M. Devalland", room: "410", time: "Ven 15h50-16h45", icon: "fa-laptop-code", color: "text-emerald-400", bg: "bg-emerald-900/30", border: "border-emerald-500/30", groups: ["-", "-", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5"] },
    { subject: "TP Info - Gr. 3", prof: "M. Poulet", room: "93", time: "Lun 15h50-16h45", icon: "fa-laptop-code", color: "text-emerald-400", bg: "bg-emerald-900/30", border: "border-emerald-500/30", groups: ["-", "-", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10", "1,2,3,4,5", "11,12,13,14,15", "6,7,8,9,10"] },

    // Français (Les voici bien corrigées avec les bonnes cases vides !)
    { subject: "Français", prof: "Mme Plassart", room: "312", time: "Ven 16h00-17h30", icon: "fa-book-open", color: "text-rose-400", bg: "bg-rose-900/30", border: "border-rose-500/30", groups: ["-", "-", "1", "12", "7", "2", "11", "6", "3", "14", "9", "4", "15", "10", "1", "13", "8", "3", "11", "6", "-", "5", "12", "7", "2", "13", "8"] },
    { subject: "Français", prof: "Mme Plassart", room: "312", time: "Ven 17h30-18h00", icon: "fa-book-open", color: "text-rose-400", bg: "bg-rose-900/30", border: "border-rose-500/30", groups: ["-", "-", "5.1", "15.1", "10.1", "5.2", "15.2", "10.2", "5.3", "-", "-", "-", "-", "-", "-", "14.1", "9.1", "4.1", "14.2", "9.2", "-", "4.2", "14.3", "9.3", "4.3", "15.3", "10.3"] }
];

// --- DONNÉES FLASHCARDS ---
const physiqueCards = [
    { front: "Expression du vecteur position en coordonnées cartésiennes", back: "$$\\vec{OM} = x\\cdot\\vec{u}_x + y\\cdot\\vec{u}_y + z\\cdot\\vec{u}_z$$ (en mètres, m).", hint: "Pensez aux 3 axes de l'espace (x, y, z) et à leurs vecteurs unitaires." },
    { front: "Expression du vecteur vitesse instantanée en coordonnées cartésiennes", back: "$$\\vec{v}_{M/R} = \\left(\\frac{d\\vec{OM}}{dt}\\right)_R = \\dot{x}\\cdot\\vec{u}_x + \\dot{y}\\cdot\\vec{u}_y + \\dot{z}\\cdot\\vec{u}_z$$ (en $m.s^{-1}$).", hint: "Dérivée première du vecteur position par rapport au temps." },
    { front: "Expression du vecteur accélération en coordonnées cartésiennes", back: "$$\\vec{a}_{M/R} = \\left(\\frac{d\\vec{v}}{dt}\\right)_R = \\ddot{x}\\cdot\\vec{u}_x + \\ddot{y}\\cdot\\vec{u}_y + \\ddot{z}\\cdot\\vec{u}_z$$ (en $m.s^{-2}$).", hint: "Dérivée seconde du vecteur position." },
    { front: "Vitesse moyenne et accélération moyenne (mouvement unidirectionnel)", back: "Vitesse moyenne : $$v_{MOY} = \\frac{\\Delta x}{\\Delta t}$$ ($m.s^{-1}$)<br><br>Accélération moyenne : $$a_{MOY} = \\frac{\\Delta v}{\\Delta t}$$ ($m.s^{-2}$)", hint: "C'est un taux d'accroissement sur un intervalle $\\Delta t$." },
    { front: "Principe Fondamental de la Dynamique (PFD)", back: "Dans un référentiel galiléen : $$\\sum\\vec{F}_{ext} = \\frac{d\\vec{p}_{M/R}}{dt} = m\\cdot\\vec{a}_{M/R}$$", hint: "C'est la deuxième loi de Newton." },
    { front: "Force d'interaction gravitationnelle (A sur B)", back: "$$\\vec{F}_{A \\rightarrow B} = -G\\frac{m_A m_B}{r^2}\\vec{u}_{A \\rightarrow B}$$", hint: "G constante de gravitation, $r$ distance AB." },
    { front: "Force de rappel élastique d'un ressort", back: "$$\\vec{T} = -k(l-l_0)\\vec{u}_{sortant}$$", hint: "$k$ est la raideur ($N.m^{-1}$), $l-l_0$ l'allongement." },
    { front: "Équations horaires du MRUA", back: "Accélération $a(t)=a_0$<br>Vitesse $v(t) = a_0t + v_0$<br>Position $x(t) = \\frac{1}{2}a_0t^2 + v_0t + x_0$", hint: "Polynôme du second degré pour la position." },
    { front: "Travail et Puissance d'une force", back: "Travail : $$\\delta W(\\vec{F}) = \\vec{F}\\cdot d\\vec{M}$$ (en Joules)<br>Puissance : $$P(\\vec{F}) = \\vec{F}\\cdot\\vec{v}$$ (en Watts)", hint: "Produit scalaire avec le déplacement / avec la vitesse." },
    { front: "Démonstration du Théorème de l'Énergie Cinétique (TEC)", back: "PFD : $m\\frac{d\\vec{v}}{dt} = \\sum\\vec{F}_i$<br>On multiplie par $\\vec{v}$ : $m\\vec{v}\\cdot\\frac{d\\vec{v}}{dt} = \\sum\\vec{F}_i\\cdot\\vec{v}$<br>$\\frac{d}{dt}(\\frac{1}{2}mv^2) = \\sum P(\\vec{F}_i)$<br>En intégrant sur $dt$ : $\\Delta E_c = \\sum W_{A\\rightarrow B}$", hint: "L'astuce clé est de multiplier scalairement le PFD par le vecteur vitesse $\\vec{v}$." },
    { front: "Énergie Potentielle de Pesanteur (Conventions de signe)", back: "Axe vertical orienté vers le **haut** : $E_{pp} = +mgz + Cte$<br><br>Axe vertical orienté vers le **bas** : $E_{pp} = -mgz + Cte$", hint: "Dépend de l'orientation de l'axe z choisi." },
    { front: "Théorème de l'Énergie Mécanique (TEM)", back: "$$\\frac{dE_m}{dt} = \\sum P(\\vec{F}_{non\\_conservative})$$", hint: "S'il n'y a que des forces conservatives, $E_m$ se conserve." },
    { front: "Positions d'équilibre stable et instable", back: "Stable : $\\frac{dE_p}{dx}=0$ et $\\frac{d^2E_p}{dx^2} > 0$ (minimum d'énergie).<br><br>Instable : $\\frac{dE_p}{dx}=0$ et $\\frac{d^2E_p}{dx^2} < 0$ (maximum d'énergie).", hint: "Pensez au fond d'une cuvette (stable) ou au sommet d'une bosse (instable)." },
    { front: "Méthodologie : BAME et PFD (Palet sur glace tiré par une force F)", back: "1. BAME : $\\vec{P} = -mg\\vec{u}_z$, $\\vec{N} = N\\vec{u}_z$, $\\vec{F} = F\\vec{u}_x$<br>2. PFD : $\\vec{P} + \\vec{N} + \\vec{F} = m\\vec{a}$<br>3. Proj sur x : $F = m\\ddot{x} \\implies \\ddot{x} = F/m$", hint: "Mouvement unidirectionnel, le poids et la réaction s'annulent." },
    { front: "Équations horaires : Chute libre balistique (angle $\\alpha$)", back: "CI : $v_{0x} = v_0\\cos\\alpha$, $v_{0z} = v_0\\sin\\alpha$<br>Accélération : $\\ddot{x}=0$, $\\ddot{z}=-g$<br>Vitesse : $\\dot{x}=v_0\\cos\\alpha$, $\\dot{z}=-gt + v_0\\sin\\alpha$<br>Position : $x(t)=(v_0\\cos\\alpha)t$, $z(t)=-\\frac{1}{2}gt^2+(v_0\\sin\\alpha)t$", hint: "Projeter le vecteur vitesse initiale avec la trigonométrie." },
    { front: "Équilibre d'un système masse-ressort vertical ($z_{eq}$)", back: "BAME : $\\vec{P}=mg\\vec{u}_z$ et $\\vec{T}=-k(z-l_0)\\vec{u}_z$<br>À l'équilibre (PFS) : $\\sum\\vec{F} = \\vec{0} \\implies mg - k(z_{eq}-l_0) = 0$<br>$$z_{eq} = l_0 + \\frac{mg}{k}$$", hint: "Cohérence : si $m$ augmente, $z_{eq}$ augmente. Si $k$ augmente, $z_{eq}$ diminue." },
    { front: "Skieur glissant sans frottement d'une hauteur h (Vitesse finale ?)", back: "Conservation de $E_m$ (seul le poids travaille, $\\vec{N} \\perp \\vec{v}$).<br>$E_m(h) = E_m(0)$<br>$mgh + 0 = 0 + \\frac{1}{2}mv^2$<br>$$v = \\sqrt{2gh}$$", hint: "La vitesse finale est indépendante de la masse et de l'angle de la pente." },
    { front: "Projections des vecteurs polaires $(\\vec{u}_r, \\vec{u}_\\theta)$ en cartésien", back: "$$\\vec{u}_r = \\cos(\\theta)\\vec{u}_x + \\sin(\\theta)\\vec{u}_y$$<br> $$\\vec{u}_\\theta = -\\sin(\\theta)\\vec{u}_x + \\cos(\\theta)\\vec{u}_y$$", hint: "Identique pour la base cylindrique (on ajoute juste $\\vec{u}_z$)." },
    { front: "Relation vitesse et vitesse angulaire (Mvt circulaire)", back: "$$v = R \\cdot \\omega$$<br>avec $v$ en $m.s^{-1}$, $R$ en $m$, et $\\omega = \\dot{\\theta}$ en $rad.s^{-1}$.", hint: "La vitesse linéaire est proportionnelle au rayon et à la vitesse de rotation." },
    { front: "Principe des actions réciproques (3ème Loi de Newton)", back: "Si un corps A exerce une force sur un corps B, alors B exerce sur A une force de même direction, de même norme, mais de **sens opposé** :<br>$$\\vec{F}_{A \\rightarrow B} = -\\vec{F}_{B \\rightarrow A}$$", hint: "Action = Réaction." }
];

const mecaCards = [
    { front: "Définition d'une Base Orthonormée Directe (B.O.N.)", back: "Une base $(\\vec{i}, \\vec{j}, \\vec{k})$ est orthonormée si ses vecteurs sont unitaires ($||\\vec{i}||=1$) et orthogonaux deux à deux.<br><br>Elle est *directe* si elle respecte la règle de la main droite : $$\\vec{i} \\wedge \\vec{j} = \\vec{k}$$", hint: "Indispensable pour l'orientation et le produit vectoriel." },
    { front: "Relation de Chasles pour les angles orientés", back: "$$(\\vec{u}, \\vec{v}) + (\\vec{v}, \\vec{w}) = (\\vec{u}, \\vec{w}) \\pmod{2\\pi}$$", hint: "Permet de décomposer un angle." },
    { front: "Composantes d'un vecteur $\\vec{V}$ avec un angle $\\theta$", back: "Si $\\vec{V}$ fait un angle $\\theta$ avec l'axe $\\vec{x}$ :<br>$$\\vec{V} = ||\\vec{V}|| \\cos(\\theta)\\cdot\\vec{i} + ||\\vec{V}|| \\sin(\\theta)\\cdot\\vec{j}$$", hint: "Le cosinus est toujours sur le côté adjacent à l'angle." },
    { front: "Produit scalaire : Définition géométrique", back: "$$\\vec{u} \\cdot \\vec{v} = ||\\vec{u}|| \\times ||\\vec{v}|| \\times \\cos(\\vec{u}, \\vec{v})$$", hint: "Renvoie un nombre. Nul quand orthogonaux." },
    { front: "Produit scalaire : Expression analytique", back: "Dans une B.O.N :<br>$$\\vec{u} \\cdot \\vec{v} = X X' + Y Y' + Z Z'$$", hint: "On multiplie les composantes et on somme." },
    { front: "Produit vectoriel : Définition géométrique", back: "Le vecteur $\\vec{w} = \\vec{u} \\wedge \\vec{v}$ est orthogonal à $\\vec{u}$ et $\\vec{v}$, de sens direct, et de norme : $$||\\vec{w}|| = ||\\vec{u}|| \\times ||\\vec{v}|| \\times |\\sin(\\vec{u}, \\vec{v})|$$", hint: "Renvoie un vecteur. Nul quand colinéaires." },
    { front: "Produit vectoriel : Expression analytique", back: "Dans une B.O.N directe :<br>$$\\begin{pmatrix} X \\\\ Y \\\\ Z \\end{pmatrix} \\wedge \\begin{pmatrix} X' \\\\ Y' \\\\ Z' \\end{pmatrix} = \\begin{pmatrix} Y Z' - Z Y' \\\\ Z X' - X Z' \\\\ X Y' - Y X' \\end{pmatrix}$$", hint: "Utilisez le produit en croix." }
];

const mathCardsSemaine1 = [
    { front: "Démonstration par contraposée : Principe", back: "Pour prouver que $P \\implies Q$, on démontre que :<br>$$\\text{non}(Q) \\implies \\text{non}(P)$$", hint: "L'absence de Q implique l'absence de P." },
    { front: "Démonstration par l'absurde : Principe", back: "Pour prouver $P$, on **suppose que $P$ est fausse** ($\\text{non}(P)$).<br>On mène un raisonnement logique jusqu'à aboutir à une **contradiction**.", hint: "On démontre que l'inverse est impossible." },
    { front: "Démonstration par récurrence : Les 3 étapes", back: "1. **Initialisation** : $P(n_0)$ est vraie.<br>2. **Hérédité** : On suppose $P(n)$ vraie, on prouve $P(n+1)$.<br>3. **Conclusion** : $P(n)$ vraie pour tout $n \\ge n_0$.", hint: "Le principe des dominos." },
    { front: "Somme télescopique $\\sum$", back: "$$\\sum_{k=m}^{n} (a_{k+1} - a_k) = a_{n+1} - a_m$$", hint: "Tous les termes intermédiaires s'annulent." },
    { front: "Expression de $\\binom{n}{p}$", back: "$$\\binom{n}{p} = \\frac{n!}{p!(n-p)!}$$", hint: "Nombre de façons de choisir p éléments parmi n." },
    { front: "Formule de Pascal", back: "$$\\binom{n}{p} = \\binom{n-1}{p-1} + \\binom{n-1}{p}$$", hint: "Un élément est la somme de celui du dessus et de celui du dessus à gauche." },
    { front: "Retrouver $\\binom{4}{2}$ avec Pascal", back: "L0: 1<br>L1: 1 - 1<br>L2: 1 - 2 - 1<br>L3: 1 - 3 - 3 - 1<br>L4: 1 - 4 - **6** - 4 - 1<br>$\\implies \\binom{4}{2} = 6$.", hint: "3ème colonne de la ligne 4." },
    { front: "Binôme de Newton", back: "$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$$", hint: "Généralisation des identités remarquables." },
    { front: "Développement de $(a-b)^5$", back: "Ligne 5: 1 - 5 - 10 - 10 - 5 - 1.<br>$$(a-b)^5 = a^5 - 5a^4b + 10a^3b^2 - 10a^2b^3 + 5ab^4 - b^5$$", hint: "Signes alternés." }
];

const mathCardsMemento = [
    { front: "Valeurs des coefficients $\\binom{n}{0}$, $\\binom{n}{1}$, $\\binom{n}{2}$", back: "$$\\binom{n}{0} = 1$$<br> $$\\binom{n}{1} = n$$<br> $$\\binom{n}{2} = \\frac{n(n-1)}{2}$$", hint: "Issu de votre Mémento manuscrit." },
    { front: "Somme d'une suite arithmétique", back: "$$S = \\frac{\\text{nombre de termes}}{2} \\times (\\text{1er} + \\text{dernier})$$", hint: "Issu de votre Mémento manuscrit." },
    { front: "Somme d'une suite géométrique", back: "$$S = \\text{1er terme} \\times \\frac{1 - q^{\\text{nombre de termes}}}{1 - q}$$", hint: "Issu de votre Mémento manuscrit." },
    { front: "Identité trigonométrique", back: "$$\\cos^2(x) + \\sin^2(x) = 1$$", hint: "Issu de votre Mémento manuscrit." },
    { front: "Addition Cosinus", back: "$$\\cos(a+b) = \\cos(a)\\cos(b) - \\sin(a)\\sin(b)$$<br>$$\\cos(a-b) = \\cos(a)\\cos(b) + \\sin(a)\\sin(b)$$", hint: "Issu de votre Mémento manuscrit." },
    { front: "Addition Sinus", back: "$$\\sin(a+b) = \\sin(a)\\cos(b) + \\sin(b)\\cos(a)$$<br>$$\\sin(a-b) = \\sin(a)\\cos(b) - \\sin(b)\\cos(a)$$", hint: "Issu de votre Mémento manuscrit." },
    { front: "Tableau des dérivées 1", back: "$$(x^n)' = n x^{n-1}$$<br>$$(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$$<br>$$(\\ln x)' = \\frac{1}{x}$$<br>$$(e^x)' = e^x$$", hint: "Issu de votre Mémento manuscrit." },
    { front: "Tableau des dérivées 2 (Trigo)", back: "$$(\\sin x)' = \\cos x$$<br>$$(\\cos x)' = -\\sin x$$<br>$$(\\tan x)' = 1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$$", hint: "Issu de votre Mémento manuscrit." },
    { front: "Opérations sur les dérivées", back: "$$(u \\cdot v)' = u'v + uv'$$<br>$$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$$<br>$$(v \\circ u)' = u' \\times (v' \\circ u)$$", hint: "Issu de votre Mémento manuscrit." },
    { front: "Primitives de formes $u'$", back: "$$\\int \\frac{u'}{u} dx = \\ln(|u|) + C$$<br>$$\\int \\frac{u'}{\\sqrt{u}} dx = 2\\sqrt{u} + C$$<br>$$\\int u'u^n dx = \\frac{u^{n+1}}{n+1} + C$$", hint: "Issu de votre Mémento manuscrit." }
];

const mathCardsChap1 = [
    {front: "Proposition et théorème", back: "Une <b>proposition</b> est une phrase mathématique qui a un sens et une seule signification : elle est soit vraie, soit fausse.<br>Un <b>théorème</b> est une proposition que l'on a démontrée comme étant vraie.", hint: "Une proposition non démontrée n'est qu'une conjecture."},
    {front: "Signification des quantificateurs $\\forall$ et $\\exists$", back: "$\\forall$ : Pour tout élément.<br>$\\exists$ : Il existe au moins un élément.", hint: "Vocabulaire de logique de base."},
    {front: "Négation de « $P$ et $Q$ » / « $P$ ou $Q$ »", back: "$$\\overline{P \\text{ et } Q} = \\overline{P} \\text{ ou } \\overline{Q}$$$$\\overline{P \\text{ ou } Q} = \\overline{P} \\text{ et } \\overline{Q}$$", hint: "Lois de De Morgan : le « et » devient « ou » et inversement."},
    {front: "Implication $P \\Rightarrow Q$ : vocabulaire", back: "$P$ est une condition <b>suffisante</b> pour $Q$.<br>$Q$ est une condition <b>nécessaire</b> pour $P$.", hint: "« Il suffit que $P$ » ; « il faut que $Q$ »."},
    {front: "Négation de l'implication $P \\Rightarrow Q$", back: "$$\\overline{P \\Rightarrow Q} = P \\text{ et } \\overline{Q}$$", hint: "Car « $P \\Rightarrow Q$ » équivaut à « $\\overline{P}$ ou $Q$ »."},
    {front: "Implication réciproque de $P \\Rightarrow Q$", back: "$$Q \\Rightarrow P$$", hint: "On échange les rôles de $P$ et $Q$."},
    {front: "Équivalence $P \\Leftrightarrow Q$", back: "$P$ et $Q$ sont équivalentes lorsque $P \\Rightarrow Q$ <b>et</b> $Q \\Rightarrow P$ sont vraies.", hint: "Les deux implications doivent être vraies simultanément."},
    {front: "Contraposée de $P \\Rightarrow Q$", back: "$$\\overline{Q} \\Rightarrow \\overline{P}$$", hint: "Deux implications contraposées sont équivalentes."},
    {front: "Démontrer une égalité $m = p$ : les 3 méthodes", back: "1. Transformer un membre par étapes jusqu'à obtenir l'autre.<br>2. Transformer $m$ et $p$ pour montrer qu'ils sont égaux à une même troisième expression.<br>3. Montrer que $m - p = 0$.", hint: "Ne pas confondre égalité et équivalence."},
    {front: "Démontrer par déduction", back: "Pour montrer que $P \\Rightarrow Q$ est vrai, on suppose $P$ vraie et on montre que $Q$ est vraie.", hint: "C'est la méthode de démonstration la plus directe."},
    {front: "Démontrer par disjonction des cas", back: "Pour démontrer $P \\Rightarrow Q$, on introduit une propriété $P'$ puis on démontre que $(P \\text{ et } P') \\Rightarrow Q$ et que $(P \\text{ et } \\overline{P'}) \\Rightarrow Q$.", hint: "Exemple : distinguer le cas $n$ pair et le cas $n$ impair."},
    {front: "Démontrer par analyse-synthèse", back: "<b>Analyse</b> : on suppose qu'une solution existe et on en déduit des conditions nécessaires sur elle.<br><b>Synthèse</b> : on vérifie que les solutions trouvées conviennent bien.", hint: "Utile quand on ne peut pas raisonner directement par équivalence."},
    {front: "Démontrer par contraposée", back: "Une implication et sa contraposée étant équivalentes, il est parfois plus simple de démontrer $\\overline{Q} \\Rightarrow \\overline{P}$ plutôt que $P \\Rightarrow Q$.", hint: "Exemple : $n^2$ impair $\\Rightarrow n$ impair."},
    {front: "Démontrer par l'absurde : Principe", back: "Pour démontrer $P \\Rightarrow Q$, on suppose que $P$ est vraie et que $Q$ est fausse ($\\overline{Q}$), puis on cherche à aboutir à une contradiction.", hint: "Utile pour prouver l'irrationalité de $\\sqrt{2}$ par exemple."},
    {front: "Démonstration par récurrence : Les 3 étapes", back: "1. <b>Initialisation</b> : On vérifie que la propriété est vraie au rang $n_0$.<br>2. <b>Hérédité</b> : On suppose la propriété vraie à un rang $n \\ge n_0$, et on montre qu'elle reste vraie au rang $n+1$.<br>3. <b>Conclusion</b> : La propriété est vraie pour tout $n \\ge n_0$.", hint: "Le principe des dominos."},
    {front: "Définition de $\\sum$ et $\\prod$", back: "Pour $n+1$ réels $a_0, a_1, ..., a_n$ :<br>$$\\sum_{k=0}^{n} a_k = a_0 + a_1 + \\cdots + a_n$$$$\\prod_{k=0}^{n} a_k = a_0 \\times a_1 \\times \\cdots \\times a_n$$", hint: "$k$ est une variable muette, on peut la remplacer par n'importe quelle lettre."},
    {front: "Relation de Chasles (sommes)", back: "Pour $m < n$ :<br>$$\\sum_{k=0}^{m} a_k + \\sum_{k=m+1}^{n} a_k = \\sum_{k=0}^{n} a_k$$", hint: "On découpe la somme en deux morceaux consécutifs."},
    {front: "Linéarité de la somme", back: "$$\\sum_{k=0}^{n} \\lambda a_k = \\lambda \\sum_{k=0}^{n} a_k$$$$\\sum_{k=0}^{n} (a_k + b_k) = \\sum_{k=0}^{n} a_k + \\sum_{k=0}^{n} b_k$$", hint: "Vrai pour tout $\\lambda \\in \\mathbb{R}$."},
    {front: "Changement d'indice (sommes)", back: "$$\\sum_{k=1}^{n} a_{k-1} = \\sum_{k=0}^{n-1} a_k$$", hint: "On décale l'indice de sommation tout en gardant les mêmes termes."},
    {front: "Définition de la factorielle $n!$", back: "$$n! = 1 \\times 2 \\times 3 \\times ... \\times n$$<br>Convention : $0! = 1$", hint: "Produit des $n$ premiers entiers naturels non nuls."},
    {front: "Coefficient binomial $\\binom{n}{p}$ : définition", back: "Le nombre de combinaisons de $p$ éléments d'un ensemble $E$ de cardinal $n$ est noté $\\binom{n}{p}$, qui se lit « $p$ parmi $n$ ».", hint: "Une combinaison de $p$ éléments est une partie de $E$ de cardinal $p$."},
    {front: "Formule du triangle de Pascal", back: "$$\\binom{n}{p} = \\binom{n-1}{p} + \\binom{n-1}{p-1}$$", hint: "Utile pour calculer les coefficients de proche en proche."},
    {front: "Formule explicite du coefficient binomial $\\binom{n}{p}$", back: "$$\\binom{n}{p} = \\frac{n!}{p!(n-p)!}$$", hint: "Nombre de combinaisons de $p$ éléments parmi $n$."},
    {front: "Formule du binôme de Newton", back: "$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k}$$<br>ou<br>$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$$", hint: "Généralisation des identités remarquables."}
];

const mathCardsChap2 = [
    {front: "Forme algébrique d'un nombre complexe", back: "$$z = x + iy \\quad \\text{où } (x,y) \\in \\mathbb{R}^2 \\text{ et } i^2 = -1$$", hint: "$x$ est la partie réelle, $y$ la partie imaginaire."},
    {front: "Notation partie réelle / partie imaginaire", back: "Le réel $x$ est la partie réelle de $z$, notée $\\Re(z)$ ou $\\text{Re}(z)$.<br>Le réel $y$ est la partie imaginaire de $z$, notée $\\Im(z)$ ou $\\text{Im}(z)$.", hint: "Attention : la partie imaginaire est un réel (pas $iy$)."},
    {front: "Imaginaire pur", back: "$z$ est un imaginaire pur lorsque $\\Re(z) = 0$.", hint: "$z$ s'écrit alors $z = iy$."},
    {front: "Conjugué d'un nombre complexe", back: "Le conjugué de $z = x+iy$ est $\\overline{z} = x - iy$.", hint: "On change le signe de la partie imaginaire."},
    {front: "Affixe d'un point / d'un vecteur", back: "À tout point $M(x,y)$ du plan, on associe l'affixe $z = x+iy$ : $M$ est le point image de $z$.<br>De même, tout vecteur $\\vec{w}(x,y)$ a pour affixe $z = x+iy$.", hint: "Le plan $\\mathbb{R}^2$ s'identifie à $\\mathbb{C}$."},
    {front: "Module d'un nombre complexe", back: "$$|z| = \\sqrt{x^2 + y^2}$$", hint: "Correspond à la distance $OM$ dans le plan complexe : $|z| = OM$."},
    {front: "Argument d'un nombre complexe", back: "Toute mesure $\\theta$ de l'angle $(\\vec{u}, \\vec{OM})$ est un argument de $z$, noté $\\arg(z)$ :<br>$$\\cos \\theta = \\frac{\\Re(z)}{|z|} \\quad \\text{et} \\quad \\sin \\theta = \\frac{\\Im(z)}{|z|}$$", hint: "L'argument est défini modulo $2\\pi$."},
    {front: "Formes trigonométrique et exponentielle", back: "Trigonométrique : $z = |z|(\\cos \\theta + i \\sin \\theta)$<br>Exponentielle : $z = \\rho e^{i\\theta}$, avec $\\rho = |z| \\in \\mathbb{R}^+$ et $\\theta = \\arg(z) \\in \\mathbb{R}$.", hint: "On pose $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$."},
    {front: "Propriétés du conjugué (Somme et Produit)", back: "$$\\overline{z + z'} = \\overline{z} + \\overline{z'}$$$$\\overline{z \\times z'} = \\overline{z} \\times \\overline{z'}$$$$z\\overline{z} = |z|^2$$", hint: "Le conjugué se distribue sur toutes les opérations de base."},
    {front: "Lien entre conjugué, partie réelle et imaginaire", back: "$$z + \\overline{z} = 2\\Re(z)$$$$z - \\overline{z} = 2i\\Im(z)$$", hint: "$z$ est réel $\\Leftrightarrow z = \\overline{z}$ ; $z$ est imaginaire pur $\\Leftrightarrow z = -\\overline{z}$."},
    {front: "Propriétés du module (produit, puissance, quotient)", back: "$$|\\overline{z}| = |z| \\quad |zz'| = |z| \\times |z'| \\quad |z^n| = |z|^n \\quad \\left|\\frac{z}{z'}\\right| = \\frac{|z|}{|z'|}$$", hint: "Le module se comporte comme une valeur absolue vis-à-vis des opérations."},
    {front: "Inégalité triangulaire", back: "$$|z + z'| \\le |z| + |z'|$$", hint: "La longueur d'un côté d'un triangle est inférieure à la somme des deux autres."},
    {front: "Propriétés de l'argument (produit, puissance, inverse, quotient)", back: "$$\\arg(\\overline{z}) = -\\arg(z) \\quad \\arg(zz') = \\arg(z) + \\arg(z') \\quad \\arg(z^n) = n\\arg(z)$$$$\\arg\\left(\\frac{1}{z}\\right) = -\\arg(z) \\quad \\arg\\left(\\frac{z}{z'}\\right) = \\arg(z) - \\arg(z')$$", hint: "Toutes ces égalités sont valables modulo $2\\pi$."},
    {front: "Caractériser un réel positif / un imaginaire pur avec l'argument", back: "$$\\arg(z) = 0 \\ [2\\pi] \\Leftrightarrow z \\in \\mathbb{R}^{+*}$$$$\\arg(z) = \\frac{\\pi}{2} \\ [\\pi] \\Leftrightarrow z \\in i\\mathbb{R}^*$$", hint: "Le premier est modulo $2\\pi$, le second modulo $\\pi$."},
    {front: "Racines carrées d'un nombre complexe", back: "Tout nombre complexe non nul $a$ admet deux racines carrées opposées : ce sont les solutions de $z^2 = a$.", hint: "Si on connaît un argument de $a$, on trouve facilement la forme trigonométrique des racines."},
    {front: "Discriminant d'une équation du second degré dans $\\mathbb{C}$", back: "Pour $(E) : az^2+bz+c=0$ avec $(a,b,c) \\in \\mathbb{C}^3$, $a\\ne0$, le discriminant est $$\\Delta = b^2 - 4ac$$", hint: "Même définition que dans $\\mathbb{R}$, mais $\\Delta$ peut être complexe."},
    {front: "Résolution d'une équation du second degré dans $\\mathbb{C}$", back: "Si $\\Delta = 0$ : solution double $z = -\\dfrac{b}{2a}$.<br>Si $\\Delta \\ne 0$, on note $\\delta$ une racine carrée de $\\Delta$ : $$z_1 = \\frac{-b-\\delta}{2a} \\quad z_2 = \\frac{-b+\\delta}{2a}$$", hint: "$\\delta$ est une racine carrée complexe de $\\Delta$, pas forcément réelle."},
    {front: "Équation du second degré à coefficients réels : cas $\\Delta<0$", back: "Si $(a,b,c)\\in\\mathbb{R}^3$ et $\\Delta<0$, $(E)$ admet deux solutions complexes conjuguées :<br>$$z_1 = \\frac{-b-i\\sqrt{|\\Delta|}}{2a} \\quad z_2 = \\frac{-b+i\\sqrt{|\\Delta|}}{2a}$$", hint: "Si $\\Delta>0$ on retrouve les deux solutions réelles habituelles."},
    {front: "Ensemble $\\mathbb{U}$ des complexes de module 1", back: "Pour tout $z$ de module 1, il existe $\\theta\\in\\mathbb{R}$, unique modulo $2\\pi$, tel que $z=e^{i\\theta}$.", hint: "$\\mathbb{U}$ est le cercle trigonométrique vu dans $\\mathbb{C}$."},
    {front: "Propriétés de $e^{i\\theta}$", back: "$$e^{i\\theta} \\times e^{i\\theta'} = e^{i(\\theta+\\theta')} \\quad \\frac{1}{e^{i\\theta}} = e^{-i\\theta} \\quad \\frac{e^{i\\theta}}{e^{i\\theta'}} = e^{i(\\theta-\\theta')} \\quad (e^{i\\theta})^n = e^{in\\theta}$$", hint: "Ce sont les propriétés usuelles de l'exponentielle, transposées à $i\\theta$."},
    {front: "Formule de Moivre", back: "$$(\\cos \\theta + i \\sin \\theta)^n = \\cos(n\\theta) + i \\sin(n\\theta)$$", hint: "Se retrouve très facilement avec la forme exponentielle $(e^{i\\theta})^n = e^{in\\theta}$."},
    {front: "Formules d'Euler", back: "$$\\cos x = \\frac{e^{ix} + e^{-ix}}{2}$$$$\\sin x = \\frac{e^{ix} - e^{-ix}}{2i}$$", hint: "Indispensables pour linéariser les expressions trigonométriques."},
    {front: "Linéarisation : principe", back: "Transformer un produit de sinus/cosinus en une somme, à l'aide des formules d'Euler.", hint: "Exemple : linéariser $\\sin^3 x$."},
    {front: "Racines n-ièmes de l'unité", back: "L'équation $z^n = 1$ admet $n$ solutions distinctes :<br>$$z_k = e^{i\\frac{2k\\pi}{n}} \\quad \\text{pour } k \\in \\{0, 1, ..., n-1\\}$$", hint: "Les points images forment un polygone régulier inscrit dans le cercle trigonométrique."},
    {front: "Somme des racines n-ièmes de l'unité", back: "Pour $n \\ge 2$ :<br>$$\\sum_{k=0}^{n-1} z_k = 0$$", hint: "La somme de toutes les racines n-ièmes de l'unité est nulle."},
    {front: "Racines n-ièmes d'un complexe non nul $a$", back: "Il suffit de connaître le module et un argument de $a$ pour résoudre $z^n = a$ dans $\\mathbb{C}$.", hint: "On se ramène à la forme exponentielle de $a$."},
    {front: "Fonction exponentielle complexe", back: "Pour $z = x+iy$, on définit $$e^z = e^x \\times e^{iy}$$", hint: "$f : \\mathbb{C} \\to \\mathbb{C}, \\; z \\mapsto e^z$."},
    {front: "Propriétés de l'exponentielle complexe", back: "$$|e^z| = e^{\\Re(z)} \\quad \\arg(e^z) = \\Im(z) \\ [2\\pi]$$", hint: "Le module ne dépend que de la partie réelle, l'argument que de la partie imaginaire."},
    {front: "Configuration géométrique : module et argument d'un rapport", back: "Pour $A(a), B(b), C(c), D(d)$ :<br>$$\\left|\\frac{d-c}{b-a}\\right| = \\frac{CD}{AB} \\qquad \\arg\\left(\\frac{d-c}{b-a}\\right) = (\\overrightarrow{AB}, \\overrightarrow{CD})$$", hint: "Permet de démontrer alignement, parallélisme ou orthogonalité de points."},
    {front: "Équation d'un cercle dans $\\mathbb{C}$", back: "Pour $A(a)$ et $R \\in \\mathbb{R}^{+*}$ : $|z-a|=R$ est le cercle de centre $A$ et de rayon $R$.<br>$|z-a|\\le R$ est le disque fermé, $|z-a|<R$ le disque ouvert, de centre $A$ et de rayon $R$.", hint: "$|z-a|$ représente la distance $AM$."}
];

const mathCardsDS1 = [
    {front: "Méthode : résoudre une équation par analyse-synthèse", back: "<b>Analyse</b> : on suppose $x$ solution, on transforme (ex : élève au carré) pour obtenir une condition nécessaire, on résout.<br><b>Synthèse</b> : on réinjecte chaque solution trouvée dans l'équation de départ pour vérifier qu'elle convient bien.", hint: "Indispensable dès qu'on élève au carré (transformation non réversible en général)."},
    {front: "Récurrence : démontrer qu'une expression est un multiple de $k$", back: "À l'hérédité, on développe le terme au rang $n+1$, puis on le réécrit sous la forme (terme au rang $n$) $+\\, k\\times(\\text{entier})$ pour conclure par somme de deux multiples de $k$.", hint: "Ex : $(n+1)^3+5(n+1) = (n^3+5n) + 3(n^2+n+2)$."},
    {front: "Démontrer par contraposée : rédaction type", back: "Pour montrer $n^2$ impair $\\Rightarrow n$ impair, on montre la contraposée $n$ pair $\\Rightarrow n^2$ pair : on pose $n=2k$ avec $k\\in\\mathbb{N}$, on calcule $n^2=4k^2=2\\times(2k^2)$, et $2k^2\\in\\mathbb{N}$ donc $n^2$ est pair.", hint: "Toujours poser explicitement $n=2k$ (pair) ou $n=2k+1$ (impair)."},
    {front: "Démontrer par l'absurde qu'aucun entier n'existe entre deux bornes", back: "On suppose qu'un entier $m$ existe entre les deux bornes, on manipule l'encadrement (élévation au carré, etc.) jusqu'à obtenir un encadrement impossible pour un entier (ex : $0<m^2-n^2-2n<1$), d'où contradiction.", hint: "Il n'existe pas d'entier strictement compris entre 0 et 1."},
    {front: "Télescopage : principe", back: "$$\\sum_{k=0}^{n}(a_{k+1}-a_k) = a_{n+1}-a_0$$", hint: "Les termes intermédiaires s'annulent deux à deux en cascade."},
    {front: "Décomposition type $\\dfrac{1}{(k+1)(k+2)}$", back: "$$\\frac{1}{(k+1)(k+2)} = \\frac{1}{k+1} - \\frac{1}{k+2}$$", hint: "S'obtient par réduction au même dénominateur ; c'est le point de départ d'un télescopage."},
    {front: "$\\binom{n}{2}$ sans factorielle", back: "$$\\binom{n}{2} = \\frac{n(n-1)}{2}$$", hint: "On simplifie $\\dfrac{n!}{2!(n-2)!}$."},
    {front: "Symétrie des coefficients binomiaux", back: "$$\\binom{n}{p} = \\binom{n}{n-p}$$", hint: "Choisir $p$ éléments à garder revient à choisir les $n-p$ qu'on écarte."},
    {front: "Astuce : montrer que $(1+\\sqrt{2})^n+(1-\\sqrt{2})^n \\in \\mathbb{N}$", back: "On développe les deux expressions avec le binôme de Newton. Pour $k$ pair, $(\\sqrt2)^k$ et $(-\\sqrt2)^k$ sont égaux et entiers (les termes s'ajoutent). Pour $k$ impair, ils sont opposés (les termes s'annulent). La somme finale ne contient que des entiers.", hint: "Regarder la parité de $k$ dans $(\\pm\\sqrt2)^k$."},
    {front: "Mettre un quotient de complexes sous forme algébrique", back: "On multiplie numérateur et dénominateur par le conjugué du dénominateur :<br>$$\\frac{z_1}{z_2} = \\frac{z_1 \\overline{z_2}}{|z_2|^2}$$", hint: "Le dénominateur devient réel puisque $z_2\\overline{z_2}=|z_2|^2$."},
    {front: "Module et argument d'un quotient $z_1/z_2$", back: "$$\\left|\\frac{z_1}{z_2}\\right| = \\frac{|z_1|}{|z_2|} \\qquad \\arg\\left(\\frac{z_1}{z_2}\\right) = \\arg(z_1)-\\arg(z_2) \\ [2\\pi]$$", hint: "Permet de retrouver directement la forme trigonométrique du quotient."},
    {front: "Trouver $\\cos\\theta$ par identification de deux écritures de $z$", back: "Si on connaît $z$ sous forme algébrique <b>et</b> sous forme trigonométrique $|z|(\\cos\\theta+i\\sin\\theta)$, on identifie les parties réelles entre elles (et les parties imaginaires entre elles) pour en déduire $\\cos\\theta$ (et $\\sin\\theta$).", hint: "C'est ainsi qu'on obtient des valeurs comme $\\cos(\\pi/12)$."},
    {front: "Résoudre $z^n = a$ avec $|a|=1$ (ex : $z^n=i$)", back: "On utilise $|z^n|=|z|^n$ et $\\arg(z^n)=n\\arg(z)\\,[2\\pi]$, ce qui donne une équation sur $\\arg(z)$ (ou sur $n$) du type $n\\theta = \\arg(a) + 2k\\pi,\\ k\\in\\mathbb{Z}$.", hint: "Ne jamais oublier le $+2k\\pi$, sinon on perd des solutions."},
    {front: "Racine carrée $\\delta$ d'un complexe $a+ib$ (méthode algébrique)", back: "On pose $\\delta = x+iy$ et on résout le système :<br>$$x^2-y^2=a \\qquad 2xy=b \\qquad x^2+y^2=|a+ib|$$", hint: "La 3ème équation vient de $|\\delta|^2=|\\delta^2|=|a+ib|$ ; utile quand $\\arg(a+ib)$ n'est pas une valeur connue."},
    {front: "Résoudre $az^2+bz+c=0$ dans $\\mathbb{C}$ (coefficients complexes)", back: "On calcule $\\Delta=b^2-4ac$ (complexe en général), on trouve une racine carrée $\\delta$ de $\\Delta$, puis :<br>$$z_{1,2} = \\frac{-b\\pm\\delta}{2a}$$", hint: "Pas de disjonction de cas sur le signe de $\\Delta$ : $\\Delta$ n'est pas forcément réel."},
    {front: "Formule somme $\\to$ produit : $\\cos p+\\cos q$", back: "$$\\cos p + \\cos q = 2\\cos\\left(\\frac{p+q}{2}\\right)\\cos\\left(\\frac{p-q}{2}\\right)$$", hint: "S'obtient en développant $\\cos(a+b)+\\cos(a-b)$ avec $a=\\frac{p+q}{2}$, $b=\\frac{p-q}{2}$."},
    {front: "Résoudre une équation produit du type $\\cos(2x)(2\\cos x+1)=0$", back: "Un produit est nul si et seulement si l'un des facteurs est nul : on résout séparément $\\cos(2x)=0$ et $\\cos x=-\\frac12$, puis on réunit les solutions.", hint: "$\\cos\\theta=0 \\Leftrightarrow \\theta=\\frac{\\pi}{2}\\,[\\pi]$ ; $\\cos\\theta=-\\frac12 \\Leftrightarrow \\theta=\\pm\\frac{2\\pi}{3}\\,[2\\pi]$."},
    {front: "Résoudre $\\cos x+\\cos 2x+\\cos 3x=0$", back: "On regroupe $\\cos x+\\cos 3x$ avec la formule somme-produit pour faire apparaître $\\cos(2x)$ en facteur commun, puis on se ramène à un produit nul.", hint: "$\\cos x+\\cos 3x = 2\\cos(2x)\\cos(x)$."},
    {front: "Négation d'une proposition avec $\\forall ... \\exists$", back: "$$\\overline{\\forall x, \\exists y, P(x,y)} = \\exists x, \\forall y, \\overline{P(x,y)}$$", hint: "On inverse tous les quantificateurs dans l'ordre, puis on nie la proposition finale."},
    {front: "Réflexe : $|z^n|$ et $\\arg(z^n)$", back: "$$|z^n| = |z|^n \\qquad \\arg(z^n) = n\\arg(z) \\ [2\\pi]$$", hint: "Outil de base pour résoudre toute équation du type $z^n = a$."}
];

const elecCards = [
    { front: "Loi des Nœuds (Kirchhoff)", back: "La somme des intensités des courants qui entrent par un nœud est égale à la somme des intensités des courants qui en sortent.<br>$$\\sum I_{entrants} = \\sum I_{sortants}$$", hint: "Traduit la conservation de la charge électrique." },
    { front: "Loi des Mailles (Kirchhoff)", back: "Dans une maille orientée fermée, la somme algébrique des tensions est nulle : $$\\sum U_k = 0$$", hint: "Traduit la conservation de l'énergie électrique." },
    { front: "Impédance complexe d'une Bobine (L)", back: "$$\\underline{Z}_L = jL\\omega$$", hint: "Provoque un déphasage de +90° du courant par rapport à la tension." },
    { front: "Impédance complexe d'un Condensateur (C)", back: "$$\\underline{Z}_C = \\frac{1}{jC\\omega} = -j\\frac{1}{C\\omega}$$", hint: "Provoque un déphasage de -90° du courant par rapport à la tension." }
];

// Regroupement des paquets
const decks = {
    'physique_s1': { title: "M1 & M2 : Cinématique & Énergies", subject: "Physique", icon: "fa-bolt", color: "text-yellow-400", bgGradient: "from-yellow-500 to-orange-600", cards: physiqueCards, known: new Set() },
    'mecanique_s1': { title: "Outils Maths (Vecteurs, Bases...)", subject: "Mécanique", icon: "fa-wrench", color: "text-orange-400", bgGradient: "from-orange-500 to-red-600", cards: mecaCards, known: new Set() },
    'maths_s1': { title: "Semaine 1 (Démos, Sommes, Binôme)", subject: "Mathématiques", icon: "fa-calculator", color: "text-blue-400", bgGradient: "from-blue-500 to-indigo-600", cards: mathCardsSemaine1, known: new Set() },
    'maths_memento': { title: "Mémento complet (Dérivées, Trigo...)", subject: "Mathématiques", icon: "fa-book-open", color: "text-indigo-300", bgGradient: "from-indigo-600 to-purple-700", cards: mathCardsMemento, known: new Set() },
    'maths_chap1': { title: "Chapitre 1 : Rédiger, Démontrer, Calculer", subject: "Mathématiques", icon: "fa-calculator", color: "text-blue-400", bgGradient: "from-blue-500 to-indigo-600", cards: mathCardsChap1, known: new Set() },
    'maths_chap2': { title: "Chapitre 2 : Nombres Complexes", subject: "Mathématiques", icon: "fa-calculator", color: "text-blue-400", bgGradient: "from-blue-500 to-indigo-600", cards: mathCardsChap2, known: new Set() },
    'maths_ds1': { title: "Révisions DS1 (Techniques & Réflexes)", subject: "Mathématiques", icon: "fa-graduation-cap", color: "text-rose-400", bgGradient: "from-rose-500 to-pink-700", cards: mathCardsDS1, known: new Set() },
    'elec_s1': { title: "Lois fondamentales & Impédances", subject: "Élec", icon: "fa-desktop", color: "text-emerald-400", bgGradient: "from-emerald-500 to-teal-700", cards: elecCards, known: new Set() }
};

// Architecture de l'accueil
const library = {
    'maths': { 
        title: 'Mathématiques', icon: 'fa-calculator', color: 'text-blue-400', bgGradient: 'from-blue-600 to-indigo-900', 
        rootDecks: ['maths_memento', 'maths_ds1'], 
        weeks: { 
            's1': { title: 'Semaine 1 (14 Sept)', decks: ['maths_s1'] },
            'chap1': { title: 'Chapitre 1 : Rédiger, Démontrer, Calculer', decks: ['maths_chap1'] },
            'chap2': { title: 'Chapitre 2 : Nombres Complexes', decks: ['maths_chap2'] }
        } 
    },
    'physique': { 
        title: 'Physique', icon: 'fa-bolt', color: 'text-yellow-400', bgGradient: 'from-yellow-600 to-orange-900', 
        rootDecks: [], 
        weeks: { 's1': { title: 'Semaine 1 (14 Sept)', decks: ['physique_s1'] } } 
    },
    'mecanique': { 
        title: 'Mécanique', icon: 'fa-wrench', color: 'text-orange-400', bgGradient: 'from-orange-600 to-red-900', 
        rootDecks: [], 
        weeks: { 's1': { title: 'Semaine 1 (14 Sept)', decks: ['mecanique_s1'] } } 
    },
    'elec': { 
        title: 'Élec', icon: 'fa-desktop', color: 'text-emerald-400', bgGradient: 'from-emerald-600 to-teal-900', 
        rootDecks: [], 
        weeks: { 's1': { title: 'Semaine 1 (14 Sept)', decks: ['elec_s1'] } } 
    }
};
