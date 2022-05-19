package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class PostUser extends Simulation{
  //Http Config
  val httpconf = http.baseUrl("https://gorest.co.in")
    .header("Accept",value = "application/json")
    .header("content-type", value = "application/json")
    .header("Authorization", value = "Bearer 0553ef87a77b79a95756c0ae88cb50df43dfaaf5d9df4fc04791520a4a7a7df3")

  def postUser() ={
    exec(
      http("Post request")
        .post("/public/v2/users")
        .body(RawFileBody("./src/test/resources/bodies/AddUser.json")).asJson
        .header("content-type", value = "application/json")
        .check(status is 201)
    )
  }

  val scn = scenario("Post Request")
    .exec(postUser())

  //Setup
  setUp(
    scn.inject(atOnceUsers(1)).protocols(httpconf)
  )
}
