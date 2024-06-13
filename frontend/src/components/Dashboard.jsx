import { useState, useEffect } from 'react';
import partnerList from './PList'

/*
  The top-level component containing everything relevant to the dashboard.
  This is where the dashboard is generated and input is received to 
  create and delete partners.
*/

function Dashboard() {

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
    .then((res) => res.json())
  }, [])
  
  const [partners, setPartners] = useState(partnerList);

  return (
    <div>
      <input type="text" id="pName" placeholder="Partner Title"/>
      <div>
        <input type="text" id="pLogoURL" placeholder="Partner Logo URL"/>
        <div>
          <input type="text" id="pDesc" placeholder="Partner Description"/>
          <div>
            <input type="text" id="pActive" placeholder="Active Status"/>
            <div>
              <button onClick={() => {
                setPartners(currentPartners => [...currentPartners, {
                title: document.getElementById("pName").value,
                url: document.getElementById("pLogoURL").value,
                desc: document.getElementById("pDesc").value,
                active: document.getElementById("pActive").value}])}}>
                Submit
              </button> 
              <div>
                {partners.map((p) => { 
                  return (
                    <div key={p.id} className="partner-tile">
                      {p.title}
                        <img src={p.url} className="partner-thumbnail"/>
                        <div>
                          Active Status: {p.active}
                          <div className="partner-info">
                            {p.desc}
                            <div>
                              <button onClick={() => {
                                setPartners(currentPartners => currentPartners.filter((x) =>  (x.url !== p.url) && ((x.desc !== p.desc) && (x.title !== p.title))))}}>
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                    </div>
                         );})}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;