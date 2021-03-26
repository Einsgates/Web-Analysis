import honeypotconfig
import os

infected_files = dict()


def unquoteDirectory(path):
	script_path = os.path.dirname(os.path.abspath( __file__ ))
	with open(script_path + "/scanlogs/Clam-report.log") as f:
		for line in f:
			if line.strip().endswith("FOUND"):
				line = line.split(":")[0]
				if line in infected_files:
					# If Clam-AV already exists for that key, go to the next iteration of loop
					if infected_files[line].endswith("Clam-AV"):
						continue
					infected_files[line] = infected_files[line] + ", Clam-AV"
				else:
					infected_files[line] = " Clam-AV"



	with open(script_path + "/scanlogs/Yara-report.log") as f:
		start = False
		for line in f:
			if "------------" in line:
				start = True
				continue
			elif line.startswith("yara -r"):
				start = False
			if start:
				if line.strip():
					line = line.split(" ")[1].strip()
					if line in infected_files:
						# If YARA already exists for that key, go to the next iteration of loop
						if infected_files[line].endswith("YARA"):
							continue
						infected_files[line] = infected_files[line] + ", YARA"
					else:
						infected_files[line] = " YARA"

	infected_urls = dict()

	for k, v in infected_files.iteritems():
		if k.rfind("/") < k.find("http") or k.find("http") == -1:
					website = k[:k.rfind("/")]
		else:
			website = k[k.find("http"):].split("/")[0]
		if website in infected_urls:
			infected_urls[website] = infected_urls[website] + "\n\t" + k + v
		else:
			infected_urls[website] = "\n\t" + k + v

	with open(script_path + "/scanlogs/Malicious-Websites.log", "w") as f:
		f.write("Infected directories: " + str(len(infected_urls)) + "\n")
		for k, v in infected_urls.iteritems():
			f.write("\n\n" + k.replace("%3A%2F%2F" , "://"))
			f.write(v)

