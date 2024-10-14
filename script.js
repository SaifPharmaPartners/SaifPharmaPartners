// Get modal elements
const faqModal = document.getElementById("faqModal");
const modalText = document.getElementById("modalText");
const videoModal = document.getElementById("videoModal");
const infographicModal = document.getElementById("infographicModal");

// FAQ content
const faqContent = {
    faq1: "<h2>Waarom moet ik mijn inlogmethode veranderen?</h2><p>De nieuwe inlogmethode zorgt voor extra beveiliging en meer controle over uw persoonlijke gegevens. Door bij het inloggen uw zorgverlener te kiezen, weet alleen u wie toegang heeft tot uw medische gegevens. Dit maakt het inloggen veiliger en beschermt uw privacy beter dan voorheen.</p>",
    faq2: "<h2>Wat werkt er anders bij de nieuwe inlogmethode?</h2><p>Bij de nieuwe inlogmethode logt u nog steeds in met DigiD, maar er is een belangrijke verandering: na het inloggen met DigiD kiest u zelf uw zorgverlener, zoals uw huisarts of apotheek. Dit maakt het proces veiliger, omdat alleen de zorgverleners die u kiest, toegang krijgen tot uw gegevens. U hebt hierdoor meer controle over wie uw medische gegevens kan inzien.</p>",
    faq3: "<h2>Zijn mijn gegevens veilig met de nieuwe methode?</h2><p>Ja, uw gegevens zijn nog veiliger met de nieuwe methode. Door de extra stap waarbij u uw zorgverlener kiest, heeft alleen die zorgverlener toegang tot uw gegevens. Dit geeft u meer controle over wie uw gegevens kan zien, en DigiD zorgt voor een betrouwbare en veilige inlog. Uw privacy en veiligheid staan hierbij voorop.</p>",
    faq4: "<h2>Moet ik iets doen om over te stappen naar de nieuwe methode?</h2><p>Nee, u hoeft hier niets voor te doen. De volgende keer dat u inlogt, zult u merken dat u gewoon met DigiD inlogt zoals u gewend bent. Het enige verschil is dat u na het inloggen uw zorgverlener moet kiezen, maar verder blijft alles hetzelfde voor u.</p>",
    faq5: "<h2>Wat als ik er niet uitkom?</h2><p>Geen zorgen! Als u problemen heeft met de nieuwe inlogmethode, kunt u altijd hulp vragen. U kunt terecht bij uw zorgverlener, zoals uw huisarts of apotheek, of de instructievideo op deze website bekijken. We staan klaar om u stap voor stap te helpen.</p>",
    faq6: "<h2>Wat houdt het in?</h2><p>De nieuwe inlogmethode betekent dat patiënten bij het inloggen via DigiD nu ook hun zorgverlener, zoals hun huisarts of apotheek, moeten kiezen. Dit geeft patiënten meer controle over wie toegang heeft tot hun medische gegevens, wat leidt tot een betere bescherming van hun privacy.</p>",
    faq7: "<h2>Wat verandert er voor mij?</h2><p>Voor u als zorgverlener merkt u niets van deze transitie in uw dagelijkse werkzaamheden. Dit is een transitie die specifiek impact heeft op de patiënt.</p>",
    faq8: "<h2>Wat verandert er voor patiënten?</h2><p>Voor patiënten wordt het inloggen veiliger en persoonlijker, omdat zij zelf hun zorgverlener moeten kiezen. Dit geeft hen meer controle over hun medische gegevens en zorgt voor betere bescherming van hun privacy.</p>",
    faq9: "<h2>Moet ik nog actie ondernemen?</h2><p>Als zorgverlener die gebruikmaakt van MijnGezondheid.net (MGn) en MedGemak, dient u een contractakkoord te ondertekenen zodra dit naar u verzonden wordt. Het ondertekenen van dit akkoord is noodzakelijk om de transitie naar de nieuwe inlogmethode succesvol door te voeren. <br> <br> Daarnaast kan het voorkomen dat patiënten in uw praktijk u benaderen om hulp als ze in het begin moeite hebben met de nieuwe inlogmethode. We verzoeken u vriendelijk om hen te helpen of hen te verwijzen naar de instructievideo. Om zelf goed te begrijpen hoe de nieuwe inlogprocedure werkt, adviseren we u ook om de instructievideo te bekijken, zodat u weet hoe patiënten voortaan inloggen.</p>"
};

// Function to open modals for FAQ, Video, and Infographic
document.querySelectorAll(".faq-box ul li").forEach((faqItem) => {
    faqItem.addEventListener("click", function () {
        const faqId = this.id;
        modalText.innerHTML = faqContent[faqId];
        faqModal.style.display = "block";
    });
});

// Show Video modal when clicking on the "Instructievideo" button
document.getElementById("showVideo").onclick = function () {
    videoModal.style.display = "block";
};

// Show Infographic modal when clicking on the "Infographic" button
document.getElementById("showInfographic").onclick = function () {
    infographicModal.style.display = "block";
};

// Close modals by clicking on the close icon
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        faqModal.style.display = 'none';
        videoModal.style.display = 'none';
        infographicModal.style.display = 'none';
    });
});

// Close modals when clicking outside of the modal
window.onclick = function (event) {
    if (event.target == faqModal) {
        faqModal.style.display = "none";
    } else if (event.target == videoModal) {
        videoModal.style.display = "none";
    } else if (event.target == infographicModal) {
        infographicModal.style.display = "none";
    } else if (event.target.id === "showHandleiding") { // Controleer of op de Gebruikershandleiding-knop is geklikt
        window.open("https://www.pharmapartners.nl/resources/uploads/2024/01/A31637-PharmaPaper-december-2023-DEFINITIEF-kleine-resolutie-1.pdf", "_blank"); // Open de PDF in een nieuw tabblad
    }
};

