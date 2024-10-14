// Get modal and close button
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

// Get the text to insert into the modal
const modalText = document.getElementById("modalText");

// Info boxes and content to display in modal
const infoBoxes = {
    // Patiënten infoboxen
    box1: "<h2>Waarom moet ik mijn inlogmethode veranderen?</h2><p>De nieuwe inlogmethode zorgt voor extra beveiliging en meer controle over uw persoonlijke gegevens. Door bij het inloggen uw zorgverlener te kiezen, weet alleen u wie toegang heeft tot uw medische gegevens. Dit maakt het inloggen veiliger en beschermt uw privacy beter dan voorheen.</p>",
    box2: "<h2>Wat werkt er anders bij de nieuwe inlogmethode?</h2><p>Bij de nieuwe inlogmethode logt u nog steeds in met DigiD, maar er is een belangrijke verandering: na het inloggen met DigiD kiest u zelf uw zorgverlener, zoals uw huisarts of apotheek. Dit maakt het proces veiliger, omdat alleen de zorgverleners die u kiest, toegang krijgen tot uw gegevens. U hebt hierdoor meer controle over wie uw medische gegevens kan inzien.</p>",
    box3: "<h2>Zijn mijn gegevens veilig met de nieuwe methode?</h2><p>Ja, uw gegevens zijn nog veiliger met de nieuwe methode. Door de extra stap waarbij u uw zorgverlener kiest, heeft alleen die zorgverlener toegang tot uw gegevens. Dit geeft u meer controle over wie uw gegevens kan zien, en DigiD zorgt voor een betrouwbare en veilige inlog. Uw privacy en veiligheid staan hierbij voorop.</p>",
    box4: "<h2>Moet ik iets doen om over te stappen naar de nieuwe methode?</h2><p>Nee, u hoeft hier niets voor te doen. De volgende keer dat u inlogt, zult u merken dat u gewoon met DigiD inlogt zoals u gewend bent. Het enige verschil is dat u na het inloggen uw zorgverlener moet kiezen, maar verder blijft alles hetzelfde voor u.</p>",
    box5: "<h2>Wat nou als ik er niet uitkom?</h2><p>Geen zorgen! Als u problemen heeft met de nieuwe inlogmethode, kunt u altijd hulp vragen. U kunt terecht bij uw zorgverlener, zoals uw huisarts of apotheek, of de instructievideo op deze website bekijken. We staan klaar om u stap voor stap te helpen.</p>",
    box6: "<h2>Info Poster</h2><p>De poster bevat in een notendop alle belangrijke informatie over de nieuwe DigiD inlogmethode en hoe u uw zorgverlener kunt kiezen.</p><img src='img/Poster_patiënt.drawio.png' alt='Poster patiënt' />",
    box7: `<h2>Instructievideo Inloggen</h2><p>Bekijk de onderstaande video voor een stap-voor-stap uitleg over hoe u kunt inloggen met DigiD en uw zorgverlener kunt kiezen.</p>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/UxjcdJT_PN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    
    // Zorgverleners infoboxen
    zbox1: "<h2>Wat houdt het in?</h2><p>De nieuwe inlogmethode betekent dat patiënten bij het inloggen via DigiD nu ook hun zorgverlener, zoals hun huisarts of apotheek, moeten kiezen. Dit geeft patiënten meer controle over wie toegang heeft tot hun medische gegevens, wat leidt tot een betere bescherming van hun privacy.</p>",
    zbox2: "<h2>Wat verandert er voor mij?</h2><p>Voor u als zorgverlener merkt u niets van deze transitie in uw dagelijkse werkzaamheden. Dit is een transitie die specifiek impact heeft op de patiënt.</p>",
    zbox3: "<h2>Wat verandert er voor patiënten?</h2><p>Voor patiënten wordt het inloggen veiliger en persoonlijker, omdat zij zelf hun zorgverlener moeten kiezen. Dit geeft hen meer controle over hun medische gegevens en zorgt voor betere bescherming van hun privacy.</p>",
    zbox4: "<h2>Moet ik nog actie ondernemen?</h2><p>Als zorgverlener die gebruikmaakt van MijnGezondheid.net (MGn) en MedGemak, dient u een contractakkoord te ondertekenen zodra dit naar u verzonden wordt. Het ondertekenen van dit akkoord is noodzakelijk om de transitie naar de nieuwe inlogmethode succesvol door te voeren. <br> <br> Daarnaast kan het voorkomen dat patiënten in uw praktijk u benaderen om hulp als ze in het begin moeite hebben met de nieuwe inlogmethode. We verzoeken u vriendelijk om hen te helpen of hen te verwijzen naar de instructievideo. Om zelf goed te begrijpen hoe de nieuwe inlogprocedure werkt, adviseren we u ook om de instructievideo te bekijken, zodat u weet hoe patiënten voortaan inloggen.</p>",
    zbox5: "<h2>Infographic</h2><p>Deze infographic geeft een overzicht van de nieuwe inlogmethode en wat dit voor zorgverleners betekent.</p><img src='img/infographic_zorgverlener.drawio.png' alt='Infographic Zorgverleners'>",
    zbox6: `<h2>Instructievideo</h2><p>Bekijk de instructievideo om te zien hoe de nieuwe inlogmethode werkt voor zorgverleners.</p>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/UxjcdJT_PN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
};

// Dynamically assign click event to each info box (Patiënten)
document.querySelectorAll("#patienten .info-box").forEach((box, index) => {
    box.onclick = function() {
        modalText.innerHTML = infoBoxes[`box${index + 1}`];
        modal.style.display = "block";
    };
});

// Dynamically assign click event to each info box (Zorgverleners)
document.querySelectorAll("#zorgverleners .info-box").forEach((box, index) => {
    box.onclick = function() {
        modalText.innerHTML = infoBoxes[`zbox${index + 1}`];
        modal.style.display = "block";
    };
});

// Close modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Switching between patient and healthcare provider tabs
const tabPatienten = document.getElementById('tab-patienten');
const tabZorgverleners = document.getElementById('tab-zorgverleners');
const containerPatienten = document.getElementById('patienten');
const containerZorgverleners = document.getElementById('zorgverleners');

tabPatienten.addEventListener('click', () => {
    tabPatienten.classList.add('active-tab');
    tabZorgverleners.classList.remove('active-tab');
    containerPatienten.style.display = 'flex';
    containerZorgverleners.style.display = 'none';
});

tabZorgverleners.addEventListener('click', () => {
    tabZorgverleners.classList.add('active-tab');
    tabPatienten.classList.remove('active-tab');
    containerPatienten.style.display = 'none';
    containerZorgverleners.style.display = 'flex';
});
