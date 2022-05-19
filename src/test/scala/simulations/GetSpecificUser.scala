package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetSpecificUser extends Simulation{
  //Http Config
  val httpconf = http.baseUrl("https://gorest.co.in")
    .header("Accept",value = "application/json")
    .header("Authorization", value = "Bearer 0553ef87a77b79a95756c0ae88cb50df43dfaaf5d9df4fc04791520a4a7a7df3")

  def getUser() ={
    exec(
      http("Get all users")
        .get("/public/v2/users")
        .check(jsonPath("$[0].id").saveAs("userId"))
    )
      .exec(
        http("Get specific user")
          .get("/public/v2/users/${userId}")
          .check(status is 200)
          .check(jsonPath("$.id").is("2661"))
          .check(jsonPath("$.name").is("Bhavani Talwar DDS"))
      )
  }

  val scn = scenario("Get Specific user")
    .exec(getUser())

  //Setup
  setUp(
    scn.inject(atOnceUsers(5)).protocols(httpconf)
  )
}
