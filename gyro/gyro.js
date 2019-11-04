document.getElementsByClassId('id_logic_version').innerHTML="Logic = 2019.11.4.0";

window.addEventListener("deviceorientation", on_gyro_data_uab);

funciton on_gyro_data_uab(e)
{
  docment.getElementById("id_alpha").innerHTML = e.alpha;
  docment.getElementById("id_beta").innerHTML = e.beta;
  docment.getElementById("id_gamma").innerHTML = e.gamma;
}
