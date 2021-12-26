/// <reference types="cypress" />
const oracledb = require("oracledb");
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

oracledb.initOracleClient({ libDir: "C:\\oracle\\instantclient_21_3" });

const queryData = async (query, dbconfig) => {
	let conn;
	try {
		conn = await oracledb.getConnection(dbconfig);
		return result = await conn.execute(query);
	} catch (err) {
		console.log("Error===>" + err)
		return err
	} finally {
		if (conn) {
			try {
				conn.close();
			} catch (err) {
				console("Error===>" + err);
			}
		}
	}
}

module.exports = (on, config) => {
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config
	on("task", {
		sqlQuery: (query) => {
			return queryData(query, config.env.db.devl);
		},
	});
}
