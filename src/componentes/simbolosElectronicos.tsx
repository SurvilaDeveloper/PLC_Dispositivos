import "./SimbolosElectronicos.css"

const SimbolosElectronicos = () => {
    return (
        <div>
            <h2>Símbolos Electrónicos</h2>
            <div className="table-container">
                <table className="dtable">
                    <tbody>
                        <tr>
                            <th>
                                <span style={{ fontSize: "0.8em" }}>Symbol</span>
                            </th>
                            <th>Component name</th>
                            <th>Meaning</th>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="wire_symbols"></a>Wire Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./wire.gif"
                                    height={48}
                                    alt="electrical wire symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Electrical_wiring">
                                    Electrical Wire
                                </a>
                            </td>
                            <td>Conductor of electrical current</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./wires%20connected.gif"
                                    height={48}
                                    alt="connected wires symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Electrical_wiring">
                                    Connected Wires
                                </a>
                            </td>
                            <td>Connected crossing</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./wires%20not%20connected.gif"
                                    height={48}
                                    alt="unconnected wires symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Electrical_wiring">
                                    Not Connected Wires
                                </a>
                            </td>
                            <td>Wires are not connected</td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="switch_symbols"></a>Switch Symbols and Relay Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./switch.gif"
                                    height={48}
                                    alt="SPST switch symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Switch">
                                    SPST Toggle Switch
                                </a>
                            </td>
                            <td>Disconnects current when open</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./switch%20II.gif"
                                    height={48}
                                    alt="SPDT switch symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Switch">
                                    SPDT Toggle Switch
                                </a>
                            </td>
                            <td>Selects between two connections</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./push%20button.gif"
                                    height={48}
                                    alt="push button symbol"
                                />
                            </td>
                            <td>Pushbutton Switch (N.O)</td>
                            <td>Momentary switch - normally open</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./push%20button%20II.gif"
                                    height={48}
                                    alt="push button symbol"
                                />
                            </td>
                            <td>Pushbutton Switch (N.C)</td>
                            <td>Momentary switch - normally closed</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./dip_switch.gif"
                                    height={48}
                                    alt="dip switch symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="DIP_Switch.html">DIP Switch</a>
                            </td>
                            <td>DIP switch is used for onboard configuration</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./relay_spst.gif"
                                    height={48}
                                    alt="spst relay symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Relay">SPST Relay</a>
                            </td>
                            <td rowSpan={2}>
                                Relay open / close connection by an electromagnet
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./relay_spdt.gif"
                                    height={48}
                                    alt="spdt relay symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Relay">SPDT Relay</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./jumper.gif"
                                    height={48}
                                    alt="jumper symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Jumper_(computing)">
                                    Jumper
                                </a>
                            </td>
                            <td>Close connection by jumper insertion on pins.</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./solder%20bridge.gif"
                                    height={48}
                                    alt="solder bridge symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="solder-bridge.html">Solder Bridge</a>
                            </td>
                            <td>Solder to close connection</td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="ground_symbols"></a>Ground Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./ground%20earth.gif"
                                    height={48}
                                    alt="earth ground symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Ground_(electricity)">
                                    Earth Ground
                                </a>
                            </td>
                            <td>
                                Used for zero potential reference and electrical shock protection.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./ground%20chassis.gif"
                                    height={48}
                                    alt="chassis symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Ground_(electricity)">
                                    Chassis Ground
                                </a>
                            </td>
                            <td>Connected to the chassis of the circuit</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./ground%20digital.gif"
                                    height={48}
                                    alt="common digital ground symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Ground_(electricity)">
                                    Digital / Common Ground
                                </a>
                            </td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="resistor_symbols"></a>Resistor Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./resistor.gif"
                                    height={48}
                                    alt="resistor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="resistor.html">Resistor</a> (IEEE)
                            </td>
                            <td rowSpan={2}>Resistor reduces the current flow.</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./resistor%20II.gif"
                                    height={48}
                                    alt="resistor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="resistor.html">Resistor</a> (IEC)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./potentiometer.gif"
                                    height={48}
                                    alt="potentiometer symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Potentiometer">
                                    Potentiometer
                                </a>{" "}
                                (IEEE)
                            </td>
                            <td rowSpan={2}>Adjustable resistor - has 3 terminals.</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./potentiometer%20II.gif"
                                    height={48}
                                    alt="potentiometer symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Potentiometer">
                                    Potentiometer
                                </a>{" "}
                                (IEC)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./variable%20resistor.gif"
                                    height={48}
                                    alt="variable resistor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Potentiometer">
                                    Variable Resistor / Rheostat
                                </a>{" "}
                                (IEEE)
                            </td>
                            <td rowSpan={2}>Adjustable resistor - has 2 terminals.</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./variable_resistor%20II.gif"
                                    height={48}
                                    alt="variable resistor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Potentiometer">
                                    Variable Resistor / Rheostat
                                </a>{" "}
                                (IEC)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./trimmer_resistor_II.gif"
                                    height={48}
                                    alt="trimmer resistor symbol"
                                />
                            </td>
                            <td>Trimmer Resistor</td>
                            <td>Preset resistor</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./thermistor.gif"
                                    height={48}
                                    alt="thermistor symbol"
                                />
                            </td>
                            <td>Thermistor</td>
                            <td>
                                Thermal resistor - change resistance when temperature changes
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./photoresistor.gif"
                                    height={48}
                                    alt="photoresistor symbol"
                                />
                            </td>
                            <td>Photoresistor / Light dependent resistor (LDR)</td>
                            <td>
                                Photo-resistor - change resistance with light intensity change
                            </td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="capacitor_symbols"></a>Capacitor Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./capacitor.gif"
                                    height={48}
                                    alt="capacitor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="capacitor.html">Capacitor</a>
                            </td>
                            <td rowSpan={2}>
                                Capacitor is used to store electric charge. It acts as short
                                circuit with&nbsp;AC and open circuit with DC.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./capacitor%20II.gif"
                                    height={48}
                                    alt="capacitor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="capacitor.html">Capacitor</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./capacitor%20polarized.gif"
                                    height={48}
                                    alt="polarized capacitor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Capacitor">
                                    Polarized Capacitor
                                </a>
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Electrolytic_capacitor">
                                    Electrolytic capacitor
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./capacitor%20polarized%20II.gif"
                                    height={48}
                                    alt="polarized capacitor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Capacitor">
                                    Polarized Capacitor
                                </a>
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Electrolytic_capacitor">
                                    Electrolytic capacitor
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./variable%20capacitor.gif"
                                    height={48}
                                    alt="variable capacitor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Variable_capacitor">
                                    Variable Capacitor
                                </a>
                            </td>
                            <td>Adjustable capacitance</td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="inductor_symbols"></a>Inductor / Coil Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./inductor.gif"
                                    height={48}
                                    alt="inductor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="inductor.html">Inductor</a>
                            </td>
                            <td>Coil / solenoid that generates magnetic field</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./inductor%20iron.gif"
                                    height={48}
                                    alt="iron core inductor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="inductor.html">Iron Core Inductor</a>
                            </td>
                            <td>Includes iron</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./inductor%20variable.gif"
                                    height={48}
                                    alt="variable core inductor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="inductor.html">Variable Inductor</a>
                            </td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="power_supply_symbols"></a>Power Supply Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./voltage%20source.gif"
                                    height={48}
                                    alt="voltage source symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Voltage_source">
                                    Voltage Source
                                </a>
                            </td>
                            <td>Generates constant voltage</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./current%20source.gif"
                                    height={48}
                                    alt="current source symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Current_source">
                                    Current Source
                                </a>
                            </td>
                            <td>Generates constant current.</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./AC%20source.gif"
                                    height={48}
                                    alt="ac power source symbol"
                                />
                            </td>
                            <td>AC Voltage Source</td>
                            <td>AC voltage source</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./generator.gif"
                                    height={48}
                                    alt="generator symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Electrical_generator">
                                    Generator
                                </a>
                            </td>
                            <td>
                                Electrical voltage is generated by mechanical rotation of the
                                generator
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./battery%20cell.gif"
                                    height={48}
                                    alt="battery cell symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Battery_(electricity)">
                                    Battery Cell
                                </a>
                            </td>
                            <td>Generates constant voltage</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./battery.gif"
                                    height={48}
                                    alt="battery symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Battery_(electricity)">
                                    Battery
                                </a>
                            </td>
                            <td>Generates constant voltage</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./controlled%20voltage%20source.gif"
                                    height={48}
                                    alt="controlled voltage source symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Voltage_source">
                                    Controlled Voltage Source
                                </a>
                            </td>
                            <td>
                                Generates voltage as a function of voltage or current of other
                                circuit element.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./controlled%20current%20source.gif"
                                    height={48}
                                    alt="controlled current source symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Current_source">
                                    Controlled Current Source
                                </a>
                            </td>
                            <td>
                                Generates current as a function of voltage or current of other
                                circuit element.
                            </td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="meter_symbols"></a>Meter Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./voltmeter.gif"
                                    height={48}
                                    alt="voltmeter symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Voltmeter">
                                    Voltmeter
                                </a>
                            </td>
                            <td>
                                Measures voltage. Has very high resistance. Connected in parallel.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./ammeter.gif"
                                    height={48}
                                    alt="ammeter symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Ammeter">Ammeter</a>
                            </td>
                            <td>
                                Measures electric current. Has near zero resistance. Connected
                                serially.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./ohmmeter.gif"
                                    height={48}
                                    alt="ohmmeter symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Ohmmeter">Ohmmeter</a>
                            </td>
                            <td>Measures resistance</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./wattmeter.gif"
                                    height={48}
                                    alt="wattmeter symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Wattmeter">Wattmeter</a>
                            </td>
                            <td>Measures electric power</td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="lamp_light_symbols"></a>Lamp / Light Bulb Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./lamp.gif"
                                    height={48}
                                    alt="lamp symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Lamp_(electrical_component)">
                                    Lamp
                                </a>{" "}
                                / light bulb
                            </td>
                            <td rowSpan={3}>
                                Generates light when current flows through
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./lamp2.gif"
                                    height={48}
                                    alt="lamp symbol"
                                />
                            </td>
                            <td>Lamp / light bulb</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./lamp3.gif"
                                    height={48}
                                    alt="lamp symbol"
                                />
                            </td>
                            <td>Lamp / light bulb</td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="diode_symbols"></a>Diode / LED Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./diode.gif"
                                    height={48}
                                    alt="diode symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Diode">Diode</a>
                            </td>
                            <td>
                                Diode allows current flow in one direction only - left (anode) to
                                right (cathode).
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./zener%20diode.gif"
                                    height={48}
                                    alt="zener diode"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Zener_diode">
                                    Zener Diode
                                </a>
                            </td>
                            <td>
                                Allows current flow in one direction, but also can flow in the
                                reverse direction when above breakdown voltage
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./schottky%20diode.gif"
                                    height={48}
                                    alt="schottky diode symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Schottky_diode">
                                    Schottky Diode
                                </a>
                            </td>
                            <td>Schottky diode is a diode with low voltage drop</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./varicap%20diode.gif"
                                    height={48}
                                    alt="varicap diode symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Varicap">
                                    Varactor / Varicap Diode
                                </a>
                            </td>
                            <td>Variable capacitance diode</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./tunnel_diode.gif"
                                    height={48}
                                    alt="tunnel diode symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Tunnel_diode">
                                    Tunnel Diode
                                </a>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./led.gif" height={48} alt="led symbol" />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/LED">
                                    Light Emitting Diode (LED)
                                </a>
                            </td>
                            <td>LED emits light when current flows through</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./photodiode.gif"
                                    height={48}
                                    alt="photodiode symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Photodiode">Photodiode</a>
                            </td>
                            <td>Photodiode allows current flow when exposed to light</td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="transistor_symbols"></a>Transistor Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./NPN%20transistor.gif"
                                    height={48}
                                    alt="npn transistor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Bipolar_junction_transistor#NPN">
                                    NPN Bipolar Transistor
                                </a>
                            </td>
                            <td>Allows current flow when high potential at base (middle)</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./PNP%20transistor.gif"
                                    height={48}
                                    alt="pnp transistor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Bipolar_junction_transistor#PNP">
                                    PNP Bipolar Transistor
                                </a>
                            </td>
                            <td>Allows current flow when low potential at base (middle)</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./Darlington%20transistor.gif"
                                    height={48}
                                    alt="darlington transistor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Darlington_transistor">
                                    Darlington Transistor
                                </a>
                            </td>
                            <td>
                                Made from 2 bipolar transistors. Has total gain of the product of
                                each gain.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./JFET-N%20transistor.gif"
                                    height={48}
                                    alt="JFET-N transistor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/JFET">JFET-N Transistor</a>
                            </td>
                            <td>N-channel field effect transistor</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./JFET-P%20transistor.gif"
                                    height={48}
                                    alt="JFET-P transistor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/JFET">JFET-P Transistor</a>
                            </td>
                            <td>P-channel field effect transistor</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./NMOS%20transistor.gif"
                                    height={48}
                                    alt="nmos transistor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/MOSFET">
                                    NMOS Transistor
                                </a>
                            </td>
                            <td>N-channel MOSFET transistor</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./PMOS%20transistor.gif"
                                    height={48}
                                    alt="pmos transistor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/MOSFET">
                                    PMOS Transistor
                                </a>
                            </td>
                            <td>P-channel MOSFET transistor</td>
                        </tr>

                        <tr>
                            <th colSpan={3}>Misc. Symbols</th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./motor.gif"
                                    height={48}
                                    alt="motor symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Electric_motor">Motor</a>
                            </td>
                            <td>Electric motor</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./transformer.gif"
                                    height={48}
                                    alt="transformer symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Transformer">
                                    Transformer
                                </a>
                            </td>
                            <td>Change AC voltage from high to low or low to high.</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./electric_bell.png"
                                    height={48}
                                    alt="bell symbol"
                                />
                            </td>
                            <td>Electric bell</td>
                            <td>Rings when activated</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./buzzer.png"
                                    height={48}
                                    alt="buzzer symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Buzzer">Buzzer</a>
                            </td>
                            <td>Produce buzzing sound</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./fuse.gif" height={48} alt="fuse symbol" />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Fuse_(electrical)">
                                    Fuse
                                </a>
                            </td>
                            <td rowSpan={2}>
                                The fuse disconnects when current above threshold. Used to protect
                                circuit from high currents.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./fuse%20II.gif"
                                    height={48}
                                    alt="fuse symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Fuse_(electrical)">
                                    Fuse
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./bus.gif" height={48} alt="bus symbol" />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Electrical_bus">Bus</a>
                            </td>
                            <td rowSpan={3}>
                                Contains several wires. Usually for data / address.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./bus%20II.gif" height={48} alt="bus symbol" />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Electrical_bus">Bus</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./bus%20III.gif" height={48} alt="bus symbol" />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Electrical_bus">Bus</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./optocoupler.gif"
                                    height={48}
                                    alt="optocoupler symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Optocoupler">
                                    Optocoupler / Opto-isolator
                                </a>
                            </td>
                            <td>Optocoupler isolates connection to other board</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./speaker.gif"
                                    height={48}
                                    alt="speaker symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer"
                                    href="https://en.wikipedia.org/wiki/Loudspeaker"
                                >
                                    Loudspeaker
                                </a>
                            </td>
                            <td>Converts electrical signal to sound waves</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./microphone.gif"
                                    height={48}
                                    alt="microphone symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer"
                                    href="https://en.wikipedia.org/wiki/Microphone"
                                >
                                    Microphone
                                </a>
                            </td>
                            <td>Converts sound waves to electrical signal</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./operational%20amplifier.gif"
                                    height={48}
                                    alt="operational amplifier symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer"
                                    href="https://en.wikipedia.org/wiki/Operational_amplifier"
                                >
                                    Operational Amplifier
                                </a>
                            </td>
                            <td>Amplify input signal</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./schmitt%20trigger.gif"
                                    height={48}
                                    alt="schmitt trigger symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer"

                                    href="https://en.wikipedia.org/wiki/Schmitt_trigger"
                                >
                                    Schmitt Trigger
                                </a>
                            </td>
                            <td>Operates with hysteresis to reduce noise.</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./adc.gif" height={48} alt="adc symbol" />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Analog-to-digital_converter">
                                    Analog-to-digital converter (ADC)
                                </a>
                            </td>
                            <td>Converts analog signal to digital numbers</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./dac.gif" height={48} alt="dac symbol" />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Digital-to-analog_converter">
                                    Digital-to-Analog converter (DAC)
                                </a>
                            </td>
                            <td>Converts digital numbers to analog signal</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./oscillator%20crystal.gif"
                                    height={48}
                                    alt="crystal oscillator symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Crystal_oscillator">
                                    Crystal Oscillator
                                </a>
                            </td>
                            <td>Used to generate precise frequency clock signal</td>
                        </tr>
                        <tr>
                            <td style={{ fontSize: "40px" }}>⎓</td>
                            <td>Direct current</td>
                            <td>Direct current is generated from constant voltage level</td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="antenna_symbols"></a>Antenna Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./antenna.gif"
                                    height={48}
                                    alt="antenna symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Antenna_(radio)">
                                    Antenna / aerial
                                </a>
                            </td>
                            <td rowSpan={2}>Transmits &amp; receives radio waves</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./antenna%20III.gif"
                                    height={48}
                                    alt="antenna symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Antenna_(radio)">
                                    Antenna / aerial
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./antenna%20II.gif"
                                    height={48}
                                    alt="dipole antenna symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Dipole_antenna">
                                    Dipole Antenna
                                </a>
                            </td>
                            <td>Two wires simple antenna</td>
                        </tr>

                        <tr>
                            <th colSpan={3}>
                                <a target="_blank" rel="noreferrer" id="logic_gate_symbols"></a>Logic Gates Symbols
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./NOT%20gate.gif"
                                    height={48}
                                    alt="NOT gate symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/NOT_gate">
                                    NOT Gate (Inverter
                                </a>
                                )
                            </td>
                            <td>Outputs 1 when input is 0</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./AND%20gate.gif"
                                    height={48}
                                    alt="AND gate symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/AND">AND Gate</a>
                            </td>
                            <td>Outputs 1 when both inputs are 1.</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./NAND%20gate.gif"
                                    height={48}
                                    alt="NAND gate symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/NAND_logic">
                                    NAND Gate
                                </a>
                            </td>
                            <td>Outputs 0 when both inputs are 1. (NOT + AND)</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./OR%20gate.gif"
                                    height={48}
                                    alt="OR gate symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/OR_gate">OR Gate</a>
                            </td>
                            <td>Outputs 1 when any input is 1.</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./NOR%20gate.gif"
                                    height={48}
                                    alt="NOR gate symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/NOR_logic">
                                    NOR Gate
                                </a>
                            </td>
                            <td>Outputs 0 when any input is 1. (NOT + OR)</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./XOR%20gate.gif"
                                    height={48}
                                    alt="XOR gate symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/XOR_gate">XOR Gate</a>
                            </td>
                            <td>Outputs 1 when inputs are different. (Exclusive OR)</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./D%20flip-flop.gif"
                                    height={48}
                                    alt="D flip flop symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Flip-flop_(electronics)#D_flip-flop">
                                    D Flip-Flop
                                </a>
                            </td>
                            <td>Stores one bit of data</td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src="./mux%20II.gif"
                                    height={48}
                                    alt="mux symbol"
                                />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Multiplexer">
                                    Multiplexer / Mux
                                </a>{" "}
                                2 to 1
                            </td>
                            <td rowSpan={2}>
                                Connects the output to&nbsp; selected input line.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./mux.gif" height={48} alt="mux symbol" />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Multiplexer">
                                    Multiplexer / Mux
                                </a>{" "}
                                4 to 1
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="./demux.gif" height={48} alt="demux symbol" />
                            </td>
                            <td>
                                <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Multiplexer">
                                    Demultiplexer / Demux
                                </a>{" "}
                                1 to 4
                            </td>
                            <td>Connects selected output to the input line.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SimbolosElectronicos;