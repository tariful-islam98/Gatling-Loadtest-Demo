package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetAllUser extends Simulation{
  //Http Config
  val httpconf = http.baseUrl("https://gorest.co.in")
    .header("Accept",value = "application/json")
    .header("Authorization", value = "Bearer 0553ef87a77b79a95756c0ae88cb50df43dfaaf5d9df4fc04791520a4a7a7df3")

  //Scenario
  def getAllUsers() = {
    exec(
      http("Get All Users")
        .get("/public/v2/users")
        .check(status is 200)
    )
  }

   val scn = scenario("Get All Users")
     .exec(getAllUsers())

  //Setup
  setUp(
    scn.inject(atOnceUsers(5)).protocols(httpconf)
  )
}
