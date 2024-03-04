
<template>
    <div class="w-full py-16">
        <div class="text-lg py-4">
            <div>Usage:</div>
            <div class="py-2">
                <p>1. Enter "date" to display the current date</p>
                <p>2. Enter "greet {0}" for a message</p>
                <p>3. Enter "random" to get a random number</p>
            </div>
        </div>
        <Terminal
            welcomeMessage="Welcome to Chat Terminal"
            prompt="User>"
            aria-label="Chat Terminal"
            :pt="{root: {class: 'min-h-96'}}"
            :ptOptions="{mergeSections: true, mergeProps: true}"
        />
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import Terminal from 'primevue/terminal';
import TerminalService from "primevue/terminalservice";

onMounted(() => {
    TerminalService.on('command', commandHandler);
})

onBeforeUnmount(() => {
    TerminalService.off('command', commandHandler);
})

const commandHandler = (text) => {
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch(command) {
        case "date":
            response = 'Today is ' + new Date().toDateString();
            break;

        case "greet":
            response = 'Hola ' + text.substring(argsIndex + 1);
            break;

        case "random":
            response = Math.floor(Math.random() * 100);
            break;

        default:
            response = "Unknown command: " + command;
    }
    
    TerminalService.emit('response', `Bot> ${response}`);
}
</script>
