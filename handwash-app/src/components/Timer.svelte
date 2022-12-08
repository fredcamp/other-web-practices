<script>
  import ProgressBar from './ProgressBar.svelte'
  import Button from './Button.svelte'

  const audio = new Audio('https://phptuts.github.io/fcc-handwashing/sound.wav')

  const totalSeconds = 20
  let secondsLeft = totalSeconds
  let btnDisabled = false

  $: progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100

  const startTimer = () => {
    btnDisabled = true

    const interval = setInterval(() => {
      secondsLeft--

      if (secondsLeft == 0) {
        audio.play()
        clearInterval(interval)

        setTimeout(() => {
          secondsLeft = totalSeconds
          btnDisabled = false
        }, 1500)
      }
    }, 1000)
  }
</script>

<div class="space-y-4">
  <h2 class="text-xl font-semibold">Seconds Left : {secondsLeft}</h2>
  <ProgressBar {progress} />
  <Button disabled={btnDisabled} on:handle-click={startTimer}>Start</Button>
</div>
