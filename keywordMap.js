
// keywordMap.js

const keywordMap = {
  "media": "https://valleycovidhelp.com/ccphc-resources",
  "training": "https://valleycovidhelp.com/ccphc-resources",
  "toolkit": "https://valleycovidhelp.com/ccphc-resources",
  "covid": "https://valleycovidhelp.com/ccphc-resources",
  "vaccine": "https://valleycovidhelp.com/ccphc-resources",
  "policy": "https://valleycovidhelp.com/ccphc-resources",
  "health surveillance": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "data collection": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "data monitoring": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "health data analysis": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "health indicators": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "disaggregated data": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "aggregated data": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "root causes of disparities": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "emerging health issues": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "disproportionately affected populations": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "community-informed assessment": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "community health needs": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "cross-sector data sharing": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "social determinants of health": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "inclusive survey design": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "health equity": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "community engagement": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "participatory research": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "community assets": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "narrative": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "community-based participatory research (cbpr)": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "epidemiologic surveillance": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "health trends": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "data equity": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "intersectional analysis": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "vulnerable populations": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view",
  "needs assessment": "https://drive.google.com/file/d/1OfxUfWD4N9WLk7m9HaqwkMg4k9U_Tjcp/view"
};

// Function to match keywords with partial search
function searchKeyword(query) {
  query = query.trim().toLowerCase();

  // Try exact match first
  if (keywordMap[query]) {
    return keywordMap[query];
  }

  // Try partial match
  for (const key in keywordMap) {
    if (key.includes(query)) {
      return keywordMap[key];
    }
  }

  return null;
}
