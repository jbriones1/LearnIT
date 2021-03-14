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

    technologies = front_end | back_end | databases

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
                "technologies": {technology: 0 for technology in technologies},
            }

        words = re.sub("[^\w(++|#|\-c?)]", " ", job_description).split()

        for word in words:
            technology = word.lower()

            if technology in frequencies[location]["languages"]:
                frequencies[location]["languages"][technology] += 1

            if technology in frequencies[location]["technologies"]:
                frequencies[location]["technologies"][technology] += 1


    result = {
        location: {
            "languages": [
                {"name": language, "value": value}
                for language, value in frequencies[location]["languages"].items()
            ],
            "technologies": [
                {"name": technology, "value": value}
                for technology, value in
                frequencies[location]["technologies"].items()
            ]
        }
        for location in frequencies
    }

    print(json.dumps(result, indent=2, sort_keys=True))
    f.close()

