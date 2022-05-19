package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._
import scala.language.postfixOps

class ConstantRampUser extends Simulation{
  val httpconf = http.baseUrl("https://gorest.co.in")
    .header("Authorization", value = "Bearer 0553ef87a77b79a95756c0ae88cb50df43dfaaf5d9df4fc04791520a4a7a7df3")

  val csvFeeder = csv("./src/test/resources/data/GetUser.csv").circular

  def getUser() = {
    repeat(3) {
      feed(csvFeeder)
        .exec(
          http("Get specific user")
            .get("/public/v2/users/${userid}")
            .check(status in(200 to 304))
            .check(jsonPath("$.name").is("${name}"))
        )
        .pause(2 seconds)
    }
  }

  val scn = scenario("Get all user")
    .forever() {
      exec(getUser())
    }

  setUp(
    scn.inject(
      nothingFor(3 seconds),
      constantUsersPerSec(5)during (10 seconds),
      rampUsersPerSec(1) to (5) during (10 seconds)

    )
  ).protocols(httpconf)
    .maxDuration(10)
}
