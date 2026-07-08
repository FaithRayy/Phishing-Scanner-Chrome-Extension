const api_ENDPOINT = "http://checkurl.phishtank.com/checkurl/"

export default function fetchAPI() {
    fetch(api_ENDPOINT)
        .then(response => response.json())
        .then(data => {
            const filteredInformation = data.map(phish_detail_page => ({ 
                "in_database": phish.in_database,
                "phish_id": phish.id,
                "phish_detail_page": phish.phish_detail_page,
                "verified": phish.verified,
                "verified_at": phish.verified_at,
                "valid": phish.valid
            }))
            filteredInformation.sort((a, b) => a.name.localeCompare(b.name));
            chrome.storage.local.set({locations: filteredInformation})
            console.log(filteredInformation);
    })
    .catch(error => {
        console.log(error);
    })
}