const client = require("./microcmsClient")

exports.fetchMvImages = async () => {
  const data = client.get({ endpoint: "mv_images" })
  return data
}

exports.fetchConcept = async () => {
  const data = client.get({ endpoint: "concept" })
  return data
}

exports.fetchCeoMessage = async () => {
  const data = client.get({ endpoint: "ceo_message" })
  return data
}

exports.fetchServices = async () => {
  const data = client.get({ endpoint: "services" })
  return data
}

exports.fetchCarriers = async () => {
  const data = client.get({ endpoint: "carriers" })
  return data
}

exports.fetchGalleries = async () => {
  const data = client.get({ endpoint: "galleries" })
  return data
}
