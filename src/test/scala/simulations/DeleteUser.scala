package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class DeleteUser extends Simulation {
  //Http Config
  val httpconf = http.baseUrl("https://gorest.co.in")
    .header("Accept", value = "application/json")
    .header("content-type", value = "application/json")
    .header("Authorization", value = "Bearer 0553ef87a77b79a95756c0ae88cb50df43dfaaf5d9df4fc04791520a4a7a7df3")

  def deleteUser() = {
    exec(
      http("Get all users")
        .get("/public/v2/users")
        .check(jsonPath("$[0].id").saveAs("userId"))
    )
      .exec(
        http("Delete request")
          .delete("/public/v2/users/${userId}")
          .check(status is 204)
      )
  }

  val scn = scenario("Delete Request")
    .exec(deleteUser())

  //Setup
  setUp(
    scn.inject(atOnceUsers(1)).protocols(httpconf)
  )
}
