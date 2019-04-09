package com.test.idtm

import com.test.idtm.model.User
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.application.log
import io.ktor.features.CORS
import io.ktor.features.CallLogging
import io.ktor.features.ContentNegotiation
import io.ktor.http.HttpMethod
import io.ktor.jackson.jackson
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.get
import io.ktor.routing.put
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import org.slf4j.event.Level

var user = User(1, "a.zenkovich", "Alex", "Zenkovich", "Developer", "Minsk")

fun main() {
    val server = embeddedServer(Netty, port = 8080) {
        install(ContentNegotiation) {
            jackson {
            }
        }

        install(CORS) {
            method(HttpMethod.Options)
            method(HttpMethod.Get)
            method(HttpMethod.Post)
            method(HttpMethod.Put)
            method(HttpMethod.Delete)
            method(HttpMethod.Patch)
            anyHost()
        }

        install(CallLogging) {
            this.level = Level.INFO
        }

        routing {
            get("/user/{id}") {
                val userId = call.parameters["id"]

                log.info("Load user by id $userId")
                call.respond(user)
            }
            put("/user/{id}") {
                val newUser = call.receive<User>()

                log.info("Update user")
                user = User(
                        newUser.id,
                        newUser.username,
                        newUser.name,
                        newUser.lastName,
                        newUser.title,
                        newUser.address
                )

                call.respond(user)
            }
        }
    }
    server.start(wait = true)
}