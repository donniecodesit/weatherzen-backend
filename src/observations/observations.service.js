const knex = require("../db/connection");

function create(newObservation) {
    return knex("observations").insert(newObservation).returning("*");
}

async function list() {
    return knex("observations").select("*").orderBy("observation_id", "desc");
}

async function read(observation_id) {
    return knex("observations").select("*").where({observation_id}).first();
}

async function update(updatedObservation) {
    return knex("observations")
        .select("*")
        .where({observation_id: updatedObservation.observation_id})
        .update(updatedObservation, "*")
        .then((newObs) => newObs[0]);
}

module.exports = {
    create,
    list,
    read,
    update
}