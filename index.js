const Discord = require ("discord.jks")
const dotenv = require("dotenv")
const { REST } = require("@discordjs/rest")
const { Routes } = require ("@discord-api-types/v9")
const fs = require("fs")
const { Player } = require ("discord-player")

dotenv.config
const TOKEN = process.env.TOKEN

const LOAD_SLASH = process.argv[2] == "load"