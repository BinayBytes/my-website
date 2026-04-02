<template>
  <section class="team-sec vbg" id="team">
    <VideoBackground src="/assets/videos/team.mp4" overlay-class="ov-dc" />
    <div class="sec">
      <div class="eyebrow">Our Team</div>
      <h2 class="sec-title">The People Behind<br />Proxima AI</h2>
      <p class="sec-sub">
        Operators and engineers with deep experience building AI, cloud, and infrastructure products
        across global enterprises.
      </p>
      <div class="team-grid">
        <div v-for="member in team" :key="member.initials" class="team-card">
          <div class="team-av">{{ member.initials }}</div>
          <h4>{{ member.name }}</h4>
          <div class="role">{{ member.role }}</div>
          <div class="exp">{{ member.expertise }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [
  {
    initials: 'SY',
    name: 'Sai Yendluri',
    role: 'Founder & CEO',
    expertise: 'AI · Cloud · Product Strategy',
  },
  {
    initials: 'SR',
    name: 'Sanjeeva Reddy',
    role: 'Head of Infrastructure',
    expertise: 'Network · Cloud · SRE',
  },
  {
    initials: 'SS',
    name: 'Sudhakar Shenoy',
    role: 'Head of Engineering',
    expertise: 'AI Engineering · Platform Dev',
  },
  {
    initials: 'KE',
    name: 'Kishore Earthini',
    role: 'Head of Operations',
    expertise: 'Ops · Delivery · Client Success',
  },
]
</script>
