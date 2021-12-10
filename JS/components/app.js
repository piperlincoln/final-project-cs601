export default {
  name: "App",
  computed: {
    wipacPictureHover () {
      if (this.wipacHover == true) {
        return this.wipacViz
      } else {
        return this.wipac
      }
    },
    cnergPictureHover () {
      if (this.cnergHover == true) {
        return this.cnergViz
      } else {
        return this.cnerg
      }
    },
    tcsPictureHover () {
      if (this.tcsHover == true) {
        return this.tcsViz
      } else {
        return this.tcs
      }
    }
  },
  data () {
    return {
      wipac: "https://cdn.mos.cms.futurecdn.net/MWb886Sjc3b5BrfootSedS.jpg",
      wipacViz: "https://www.researchgate.net/profile/Federico-Monti-4/publication/327717837/figure/fig1/AS:672056928661504@1537242266051/The-IceCube-Neutrino-Observatory-with-the-in-ice-array-its-subarray-DeepCore-and-the.jpg",
      wipacHover: false,
      cnerg: "https://cnerg.github.io/assets/images/hab1.png",
      cnergViz: "https://raw.githubusercontent.com/piperlincoln/DAGMC-viz/add-setup-script/svalinn_tools/img/README_example.png",
      cnergHover: false,
      tcs: "https://gdmissionsystems.com/-/media/General-Dynamics/Maritime-and-Strategic-Systems/Images/Submarine-Tactical-Control-Systems-02.ashx?h=503&w=894&la=en&hash=627A7F1558E70F7C66DB26F55F3D5F9BDD951272",
      tcsViz: "https://gdmissionsystems.com/-/media/General-Dynamics/Ground-Systems/Images/air-force-icbm-01.ashx?h=501&w=1155&la=en&hash=68EE8DFFAAE8819D8B9C91E0D05F6773E5A37CF8",
      tcsHover: false
    }
  },
  template: `
    <section class="app">
      <section class="resume">
        <h3 class="resume-heading">Wisconsin Icecube Particle Astrophysics Center</h3>
        <ul>
          <li>Member of Askaryan Radio Array Project and Tau Neutrino Search Team</li>
          <li>Analyzed and presented flasher calibration data from IceCube detector in Antarctica</li>
        </ul>
        <h3 class="resume-heading">Computational Nuclear Engineering Research Group</h3>
        <ul>
          <li>Streamlined software to visualize complex nuclear processes in CAD-based geometry</li>
          <li>Developed documentation for Direct Accelerated Geometry Monte Carlo Toolkit</li>
        </ul>
        <h3 class="resume-heading">General Dynamics Tactical Control System</h3>
        <ul>
          <li>Continuously delivered work on schedule as part of agile framework</li>
          <li>Developed and tested tactical control system for Naval Underwater Warfare division</li>
        </ul>
      </section>
      <section>
        <img :src="wipacPictureHover" @mouseover="wipacHover = true" @mouseleave="wipacHover = false" class=resume-image>
      </section>
      <section>
        <img :src="cnergPictureHover" @mouseover="cnergHover = true" @mouseleave="cnergHover = false" class=resume-image>
      </section>
      <section>
        <img :src="tcsPictureHover" @mouseover="tcsHover = true" @mouseleave="tcsHover = false" class=resume-image>
      </section>
    </section>
    `
};
