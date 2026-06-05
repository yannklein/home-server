const SERVICES = [
  {
    section: "Automation & hosting",
    items: [
      {
        name: "n8n",
        desc: "Workflow automation",
        url: "https://n8n.yannklein.dev",
        icon: "ti-git-branch",
        color: "#EA4B71", colorBg: "#FBEAF0",
        badge: "Docker", badgeBg: "#E6F1FB", badgeColor: "#0C447C"
      },
      {
        name: "Coolify",
        desc: "Self-hosted PaaS dashboard",
        url: "https://coolify.yannklein.dev",
        icon: "ti-layout-dashboard",
        color: "#3B6D11", colorBg: "#EAF3DE",
        badge: "Docker", badgeBg: "#E6F1FB", badgeColor: "#0C447C"
      },
      {
        name: "Uptime Kuma",
        desc: "Service monitoring",
        url: "https://status.yannklein.dev",
        icon: "ti-activity",
        color: "#185FA5", colorBg: "#E6F1FB",
        badge: "Coolify", badgeBg: "#EAF3DE", badgeColor: "#27500A"
      },
    ]
  },
  {
    section: "Projects",
    items: [
      {
        name: "tech-events-api",
        desc: "Sinatra / Ruby backend",
        url: "https://tech-events-api.yannklein.dev",
        icon: "ti-api",
        color: "#854F0B", colorBg: "#FAEEDA",
        badge: "Coolify", badgeBg: "#EAF3DE", badgeColor: "#27500A"
      },
      {
        name: "tech-events",
        desc: "Barcelona tech events frontend",
        url: "https://tech-events.yannklein.dev",
        icon: "ti-world",
        color: "#534AB7", colorBg: "#EEEDFE",
        badge: "GitHub Pages", badgeBg: "#F1EFE8", badgeColor: "#444441"
      },
      {
        name: "Portfolio",
        desc: "Personal site",
        url: "https://yannklein.dev",
        icon: "ti-user",
        color: "#444441", colorBg: "#F1EFE8",
        badge: "GitHub Pages", badgeBg: "#F1EFE8", badgeColor: "#444441"
      },
      {
        name: "Le Wagon Cinema",
        url: "https://lewagon-cinema.yannklein.dev",
        description: "Rails 6 app",
        badge: "Coolify"
      }
    ]
  },
  {
    section: "Radio & aircraft",
    items: [
      {
        name: "ADS-B map",
        desc: "Live aircraft over Barcelona",
        url: "https://adsb.yannklein.dev",
        icon: "ti-plane",
        color: "#185FA5", colorBg: "#E6F1FB",
        badge: "tar1090", badgeBg: "#E6F1FB", badgeColor: "#0C447C"
      },
      {
        name: "ADS-B control",
        desc: "Start / stop dump1090",
        url: "https://control.yannklein.dev",
        icon: "ti-antenna",
        color: "#993C1D", colorBg: "#FAECE7",
        badge: "nginx", badgeBg: "#F1EFE8", badgeColor: "#444441"
      },
    ]
  },
];

const app = document.getElementById('app');

SERVICES.forEach(({ section, items }) => {
  const sec = document.createElement('div');
  sec.className = 'section';
  sec.innerHTML = `<div class="section-title">${section}</div>`;
  const grid = document.createElement('div');
  grid.className = 'grid';
  items.forEach(s => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = s.url;
    a.target = '_blank';
    a.innerHTML = `
      <div class="icon" style="background:${s.colorBg};color:${s.color}">
        <i class="ti ${s.icon}" aria-hidden="true"></i>
      </div>
      <div class="card-body">
        <div class="card-name">${s.name}</div>
        <div class="card-desc">${s.desc}</div>
        <span class="badge" style="background:${s.badgeBg};color:${s.badgeColor}">${s.badge}</span>
      </div>`;
    grid.appendChild(a);
  });
  sec.appendChild(grid);
  app.appendChild(sec);
});

document.getElementById('footer').textContent =
  'Last updated June 2026 · ' + SERVICES.reduce((n, s) => n + s.items.length, 0) + ' services';
