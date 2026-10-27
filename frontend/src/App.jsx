import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const apiEndpoint = 'http://127.0.0.1:8000'

  const chicken = () => {
    fetch(`${apiEndpoint}/api/legos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  chicken()

  return (
<>
  <div className="lego-dashboard">
    <header className="dashboard-header">
      <div>
        <p className="eyebrow">YOUR COLLECTION</p>
        <h1>My LEGO Sets</h1>
        <p className="subtitle">Manage your collection and track its value.</p>
      </div>
      <button className="primary-button" type="button">
        + Add a set
      </button>
    </header>

    <section className="stats-grid">
      <div className="stat-card">
        <span className="stat-label">Total sets</span>
        <h2>128</h2>
        <span className="stat-note">Unique sets in your collection</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Total quantity</span>
        <h2>146</h2>
        <span className="stat-note">Across all sets</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Purchase value</span>
        <h2>$24,580.00</h2>
        <span className="stat-note">Original cost of your collection</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Current estimated value</span>
        <h2>$29,340.00</h2>
        <span className="stat-note gain-positive">+$4,760.00 overall gain</span>
      </div>
    </section>

    <section className="collection-section">
      <div className="collection-heading">
        <div>
          <h2>All sets</h2>
          <p>Your complete LEGO collection</p>
        </div>
        <button className="secondary-button" type="button">
          Delete selected
        </button>
      </div>

      <div className="collection-toolbar">
        <div className="search-box">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search by set name or number..."
          />
        </div>

        <select defaultValue="All conditions" aria-label="Filter by condition">
          <option>All conditions</option>
          <option>New</option>
          <option>New without box</option>
          <option>Used</option>
          <option>Built</option>
          <option>Incomplete</option>
          <option>For sale</option>
        </select>

        <select defaultValue="name" aria-label="Sort collection">
          <option value="name">Sort: Name</option>
          <option value="number">Sort: Set number</option>
          <option value="date">Sort: Date acquired</option>
          <option value="value">Sort: Current value</option>
          <option value="quantity">Sort: Quantity</option>
        </select>
      </div>

      <div className="table-wrapper">
        <table className="sets-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" aria-label="Select all sets" />
              </th>
              <th>Set</th>
              <th>Theme</th>
              <th>Quantity</th>
              <th>Date acquired</th>
              <th>Condition</th>
              <th>Purchase price</th>
              <th>Current value</th>
              <th>Gain / loss</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><input type="checkbox" aria-label="Select Millennium Falcon" /></td>
              <td>
                <div className="set-info">
                  <div className="set-image">
                    <img
                      src="https://images.brickset.com/sets/images/75192-1.jpg"
                      alt="Millennium Falcon LEGO set"
                    />
                  </div>
                  <div>
                    <strong>Millennium Falcon</strong>
                    <span className="set-number">#75192</span>
                  </div>
                </div>
              </td>
              <td>Star Wars</td>
              <td>
                <div className="quantity-control">
                  <button type="button" aria-label="Decrease quantity">−</button>
                  <input type="number" min="0" defaultValue="1" aria-label="Quantity" />
                  <button type="button" aria-label="Increase quantity">+</button>
                </div>
              </td>
              <td><input className="date-input" type="date" defaultValue="2024-06-15" aria-label="Date acquired" /></td>
              <td>
                <select className="status-select status-new" defaultValue="New" aria-label="Condition">
                  <option>New</option>
                  <option>New without box</option>
                  <option>Used</option>
                  <option>Built</option>
                  <option>Incomplete</option>
                  <option>For sale</option>
                </select>
              </td>
              <td>$849.99</td>
              <td><strong>$950.00</strong></td>
              <td><span className="gain-positive">+$100.01</span></td>
              <td><button className="delete-button" type="button" aria-label="Delete Millennium Falcon">🗑</button></td>
            </tr>

            <tr>
              <td><input type="checkbox" aria-label="Select Rivendell" /></td>
              <td>
                <div className="set-info">
                  <div className="set-image">
                    <img
                      src="https://images.brickset.com/sets/images/10316-1.jpg"
                      alt="Rivendell LEGO set"
                    />
                  </div>
                  <div>
                    <strong>The Lord of the Rings: Rivendell</strong>
                    <span className="set-number">#10316</span>
                  </div>
                </div>
              </td>
              <td>Icons</td>
              <td>
                <div className="quantity-control">
                  <button type="button" aria-label="Decrease quantity">−</button>
                  <input type="number" min="0" defaultValue="1" aria-label="Quantity" />
                  <button type="button" aria-label="Increase quantity">+</button>
                </div>
              </td>
              <td><input className="date-input" type="date" defaultValue="2024-03-20" aria-label="Date acquired" /></td>
              <td>
                <select className="status-select status-built" defaultValue="Built" aria-label="Condition">
                  <option>New</option>
                  <option>New without box</option>
                  <option>Used</option>
                  <option>Built</option>
                  <option>Incomplete</option>
                  <option>For sale</option>
                </select>
              </td>
              <td>$499.99</td>
              <td><strong>$480.00</strong></td>
              <td><span className="gain-negative">−$19.99</span></td>
              <td><button className="delete-button" type="button" aria-label="Delete Rivendell">🗑</button></td>
            </tr>

            <tr>
              <td><input type="checkbox" aria-label="Select AT-AT" /></td>
              <td>
                <div className="set-info">
                  <div className="set-image">
                    <img
                      src="https://images.brickset.com/sets/images/75313-1.jpg"
                      alt="AT-AT LEGO set"
                    />
                  </div>
                  <div>
                    <strong>AT-AT</strong>
                    <span className="set-number">#75313</span>
                  </div>
                </div>
              </td>
              <td>Star Wars</td>
              <td>
                <div className="quantity-control">
                  <button type="button" aria-label="Decrease quantity">−</button>
                  <input type="number" min="0" defaultValue="1" aria-label="Quantity" />
                  <button type="button" aria-label="Increase quantity">+</button>
                </div>
              </td>
              <td><input className="date-input" type="date" defaultValue="2023-12-10" aria-label="Date acquired" /></td>
              <td>
                <select className="status-select status-new" defaultValue="New" aria-label="Condition">
                  <option>New</option>
                  <option>New without box</option>
                  <option>Used</option>
                  <option>Built</option>
                  <option>Incomplete</option>
                  <option>For sale</option>
                </select>
              </td>
              <td>$849.99</td>
              <td><strong>$900.00</strong></td>
              <td><span className="gain-positive">+$50.01</span></td>
              <td><button className="delete-button" type="button" aria-label="Delete AT-AT">🗑</button></td>
            </tr>

            <tr>
              <td><input type="checkbox" aria-label="Select Ferrari Daytona SP3" /></td>
              <td>
                <div className="set-info">
                  <div className="set-image">
                    <img
                      src="https://images.brickset.com/sets/images/42143-1.jpg"
                      alt="Ferrari Daytona SP3 LEGO set"
                    />
                  </div>
                  <div>
                    <strong>Ferrari Daytona SP3</strong>
                    <span className="set-number">#42143</span>
                  </div>
                </div>
              </td>
              <td>Technic</td>
              <td>
                <div className="quantity-control">
                  <button type="button" aria-label="Decrease quantity">−</button>
                  <input type="number" min="0" defaultValue="2" aria-label="Quantity" />
                  <button type="button" aria-label="Increase quantity">+</button>
                </div>
              </td>
              <td><input className="date-input" type="date" defaultValue="2025-01-05" aria-label="Date acquired" /></td>
              <td>
                <select className="status-select status-unboxed" defaultValue="New without box" aria-label="Condition">
                  <option>New</option>
                  <option>New without box</option>
                  <option>Used</option>
                  <option>Built</option>
                  <option>Incomplete</option>
                  <option>For sale</option>
                </select>
              </td>
              <td>$449.99</td>
              <td><strong>$410.00</strong></td>
              <td><span className="gain-negative">−$79.98</span></td>
              <td><button className="delete-button" type="button" aria-label="Delete Ferrari Daytona SP3">🗑</button></td>
            </tr>

            <tr>
              <td><input type="checkbox" aria-label="Select Boutique Hotel" /></td>
              <td>
                <div className="set-info">
                  <div className="set-image">
                    <img
                      src="https://images.brickset.com/sets/images/10297-1.jpg"
                      alt="Boutique Hotel LEGO set"
                    />
                  </div>
                  <div>
                    <strong>Boutique Hotel</strong>
                    <span className="set-number">#10297</span>
                  </div>
                </div>
              </td>
              <td>Modular Buildings</td>
              <td>
                <div className="quantity-control">
                  <button type="button" aria-label="Decrease quantity">−</button>
                  <input type="number" min="0" defaultValue="1" aria-label="Quantity" />
                  <button type="button" aria-label="Increase quantity">+</button>
                </div>
              </td>
              <td><input className="date-input" type="date" defaultValue="2023-08-14" aria-label="Date acquired" /></td>
              <td>
                <select className="status-select status-used" defaultValue="Used" aria-label="Condition">
                  <option>New</option>
                  <option>New without box</option>
                  <option>Used</option>
                  <option>Built</option>
                  <option>Incomplete</option>
                  <option>For sale</option>
                </select>
              </td>
              <td>$229.99</td>
              <td><strong>$290.00</strong></td>
              <td><span className="gain-positive">+$60.01</span></td>
              <td><button className="delete-button" type="button" aria-label="Delete Boutique Hotel">🗑</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer className="table-footer">
        <span>Showing 5 of 128 sets</span>
        <span>Market values are estimates.</span>
      </footer>
    </section>
  </div>
</>
  )
}

export default App
