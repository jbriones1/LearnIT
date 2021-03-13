"""
Hack the break hackathon.
"""
import json
import re



if __name__ == "__main__":
    languages = {"java", "javascript", "golang", "python", "c++", "c", "c#",
                 "typescript", "php", "kotlin", "rust", "scala", "ocaml",
                 "haskell", "elixir", "f#", "swift", "objective-c", "ruby"}

    front_end = {"react", "angular", "vue", "jquery", "reasonml", "elm"}

    back_end = {"express", "django", "laravel", "flask", "phoenix"}

    databases = {"mysql", "postgresql", "mongodb"}

    #  frequencies = {state: {"languages": {language: 0 for language in languages},
                   #  "front end": {framework: 0 for framework in front_end},
                   #  "back end": {framework: 0 for framework in back_end},
                   #  "databases": {database: 0 for database in databases}}
                   #  for state in states}

    frequencies = {}

    with open("./data.json") as f:
        jobs = json.load(f)

    for job in jobs:
        job_description = job["job_description"]
        state = job["inferred_state"].lower()
        city = job["inferred_city"].lower()

        location = f"{city},{state}"

        if state == "" or city == "":
            location = "other"

        if location not in frequencies:
            frequencies[location] = {
                "languages": {language: 0 for language in languages},
                "front end": {framework: 0 for framework in front_end},
                "back end": {framework: 0 for framework in back_end},
                "databases": {database: 0 for database in databases}
            }

        words = re.sub("[^\w(++|#|\-c?)]", " ", job_description).split()

        for word in words:
            technology = word.lower()

            if technology in frequencies[location]["languages"]:
                frequencies[location]["languages"][technology] += 1

            if technology in frequencies[location]["front end"]:
                frequencies[location]["front end"][technology] += 1

            if technology in frequencies[location]["back end"]:
                frequencies[location]["back end"][technology] += 1

            if technology in frequencies[location]["databases"]:
                frequencies[location]["databases"][technology] += 1

    print(json.dumps(frequencies, indent=2, sort_keys=True))
    f.close()

