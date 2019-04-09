plugins {
    application
    kotlin("jvm") version "1.3.21"
    id("com.github.johnrengelman.shadow") version "5.0.0"
}

application {
    mainClassName = "com.test.idtm.AppKt"
}

group = "com.test.idtm"
version = "0.0.1"

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("io.ktor:ktor-server-netty:1.1.3")
    implementation("io.ktor:ktor-jackson:1.1.3")
    implementation("ch.qos.logback:logback-classic:1.2.3")
}

repositories {
    jcenter()
}

